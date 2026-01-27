'use client';

import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import { ChatRequestOptions } from 'ai';
import { Message } from 'ai/react';
import { memo, useMemo } from 'react';
import ChatMessageContent from './chat-message-content';
import ToolRenderer from './tool-renderer';

interface SimplifiedChatViewProps {
  message: Message;
  isLoading: boolean;
  reload: (
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
}

// Memoized tool renderer to prevent re-renders
const MemoizedToolRenderer = memo(ToolRenderer);

function SimplifiedChatViewComponent({
  message,
  isLoading,
  reload,
  addToolResult,
}: SimplifiedChatViewProps) {
  if (message.role !== 'assistant') return null;

  // Extract tool invocations that are in "result" state - memoized
  const currentTool = useMemo(() => {
    const toolInvocations =
      message.parts
        ?.filter(
          (part: any) =>
            part.type === 'tool-invocation' &&
            part.toolInvocation?.state === 'result'
        )
        .map((part: any) =>
          part.type === 'tool-invocation' ? part.toolInvocation : null
        )
        .filter(Boolean) || [];

    return toolInvocations.length > 0 ? [toolInvocations[0]] : [];
  }, [message.parts]);

  const hasTextContent = message.content.trim().length > 0;
  const hasTools = currentTool.length > 0;

  // Memoize the tool name to detect changes
  const toolName = useMemo(() => {
    return currentTool.length > 0 ? currentTool[0].toolName : null;
  }, [currentTool]);

  return (
    <div className="flex h-full w-full flex-col px-4">
      {/* Single scrollable container for both tool and text content */}
      <div className="custom-scrollbar flex h-full w-full flex-col overflow-y-auto">
        {/* Tool invocation result - displayed at the top, stable and no animation */}
        {hasTools && (
          <div key={toolName} className="mb-4 w-full">
            <MemoizedToolRenderer
              toolInvocations={currentTool}
              messageId={message.id || 'current-msg'}
            />
          </div>
        )}

        {/* Text content - stable container, no re-animation */}
        {hasTextContent && (
          <div className="w-full">
            <ChatBubble variant="received" className="w-full">
              <ChatBubbleMessage className="w-full">
                <ChatMessageContent
                  message={message}
                  isLast={true}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                  skipToolRendering={true}
                />
              </ChatBubbleMessage>
            </ChatBubble>
          </div>
        )}

        {/* Add some padding at the bottom for better scrolling experience */}
        <div className="pb-4"></div>
      </div>
    </div>
  );
}

// Export memoized version to prevent unnecessary re-renders
export const SimplifiedChatView = memo(SimplifiedChatViewComponent, (prevProps, nextProps) => {
  // Custom comparison to only re-render when necessary
  if (prevProps.message.id !== nextProps.message.id) return false;
  if (prevProps.isLoading !== nextProps.isLoading) return false;
  if (prevProps.message.content !== nextProps.message.content) return false;

  // Compare tool invocations length
  const prevTools = prevProps.message.parts?.filter((p: any) => p.type === 'tool-invocation') || [];
  const nextTools = nextProps.message.parts?.filter((p: any) => p.type === 'tool-invocation') || [];
  if (prevTools.length !== nextTools.length) return false;

  return true;
});
