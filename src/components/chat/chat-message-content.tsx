'use client';

import { Message } from 'ai/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useMemo, memo } from 'react';

export type ChatMessageContentProps = {
  message: Message;
  isLast?: boolean;
  isLoading?: boolean;
  reload?: () => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
  skipToolRendering?: boolean;
};

const CodeBlock = memo(({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Extract language if present in the first line
  const firstLineBreak = content.indexOf('\n');
  const firstLine = content.substring(0, firstLineBreak).trim();
  const language = firstLine || 'text';
  const code = firstLine ? content.substring(firstLineBreak + 1) : content;

  // Get first few lines for preview
  const previewLines = code.split('\n').slice(0, 1).join('\n');
  const hasMoreLines = code.split('\n').length > 1;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="my-4 w-full overflow-hidden rounded-md"
    >
      <div className="bg-secondary text-secondary-foreground flex items-center justify-between rounded-t-md border-b px-4 py-1">
        <span className="text-xs">
          {language !== 'text' ? language : 'Code'}
        </span>
        <CollapsibleTrigger className="hover:bg-secondary/80 rounded p-1">
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
      </div>

      <div className="bg-accent/80 text-accent-foreground rounded-b-md">
        {!isOpen && hasMoreLines ? (
          <pre className="px-4 py-3">
            <code className="text-sm">{previewLines + '\n...'}</code>
          </pre>
        ) : (
          <CollapsibleContent>
            <div className="custom-scrollbar" style={{ overflowX: 'auto' }}>
              <pre className="min-w-max px-4 py-3">
                <code className="text-sm whitespace-pre">{code}</code>
              </pre>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
});

CodeBlock.displayName = 'CodeBlock';

// Memoized markdown renderer for stable text that's not currently streaming
const StableMarkdown = memo(({ content }: { content: string }) => (
  <Markdown
    remarkPlugins={[remarkGfm]}
    components={{
      p: ({ children }) => (
        <p className="break-words whitespace-pre-wrap mb-3 last:mb-0">
          {children}
        </p>
      ),
      ul: ({ children }) => (
        <ul className="my-3 list-disc pl-6 space-y-1">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="my-3 list-decimal pl-8 space-y-2" style={{ listStylePosition: 'outside' }}>{children}</ol>
      ),
      li: ({ children }) => <li className="my-1 pl-1">{children}</li>,
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      a: ({ href, children }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      ),
      h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
      h2: ({ children }) => <h2 className="text-lg font-bold mb-2">{children}</h2>,
      h3: ({ children }) => <h3 className="text-base font-bold mb-2">{children}</h3>,
    }}
  >
    {content}
  </Markdown>
));

StableMarkdown.displayName = 'StableMarkdown';

function ChatMessageContentComponent({
  message,
  isLoading = false,
}: ChatMessageContentProps) {
  // Extract text content
  const textContent = useMemo(() => {
    return message.parts
      ?.filter((part): part is { type: 'text'; text: string } =>
        part.type === 'text' && !!part.text
      )
      .map(part => part.text)
      .join('') || message.content || '';
  }, [message.parts, message.content]);

  // Split content by code blocks
  const { textBlocks, codeBlocks } = useMemo(() => {
    const parts = textContent.split('```');
    const text: string[] = [];
    const code: string[] = [];

    parts.forEach((part, i) => {
      if (i % 2 === 0) {
        text.push(part);
      } else {
        code.push(part);
      }
    });

    return { textBlocks: text, codeBlocks: code };
  }, [textContent]);

  // Render content with interleaved text and code blocks
  const renderedContent = useMemo(() => {
    const elements: React.ReactNode[] = [];

    textBlocks.forEach((text, i) => {
      if (text.trim()) {
        elements.push(
          <div key={`text-${i}`} className="prose dark:prose-invert w-full max-w-none">
            <StableMarkdown content={text} />
          </div>
        );
      }

      if (codeBlocks[i]) {
        elements.push(
          <CodeBlock key={`code-${i}`} content={codeBlocks[i]} />
        );
      }
    });

    return elements;
  }, [textBlocks, codeBlocks]);

  if (!textContent) {
    return null;
  }

  return (
    <div className="w-full">
      {renderedContent}
    </div>
  );
}

// Memoize the entire component to prevent unnecessary re-renders
export default memo(ChatMessageContentComponent);
