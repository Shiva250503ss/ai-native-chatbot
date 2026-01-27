'use client';
import { useEffect, useState } from 'react';

const FluidCursor = () => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported before initializing
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      console.warn('WebGL not supported, disabling FluidCursor effect');
      setIsSupported(false);
      return;
    }

    // Dynamically import the fluid cursor hook only if WebGL is supported
    import('@/hooks/use-FluidCursor').then((module) => {
      try {
        module.default();
      } catch (error) {
        console.warn('FluidCursor initialization failed:', error);
        setIsSupported(false);
      }
    }).catch((error) => {
      console.warn('Failed to load FluidCursor:', error);
      setIsSupported(false);
    });
  }, []);

  if (!isSupported) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-0">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  );
};
export default FluidCursor;
