import React, { useRef, useEffect, useState } from "react";

function PixelatedImage({
  src,
  alt,
  className = "",
  initialScale = 0.1,
  duration = 700,
  triggerHover = false,
}) {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Detect touch device
  const isTouchDevice = () => {
    return typeof window !== "undefined" && "ontouchstart" in window;
  };

  const drawRandomPixelated = (ctx, img, scale, progress) => {
    const { width, height } = dimensions;
    if (!width || !height) return;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    const bufferCanvas = document.createElement("canvas");
    const bufferCtx = bufferCanvas.getContext("2d");
    bufferCanvas.width = width;
    bufferCanvas.height = height;

    tempCanvas.width = Math.max(1, width * scale);
    tempCanvas.height = Math.max(1, height * scale);
    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

    bufferCtx.imageSmoothingEnabled = false;
    bufferCtx.drawImage(
      tempCanvas,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height,
      0,
      0,
      width,
      height
    );

    ctx.clearRect(0, 0, width, height);

    const blockSize = 10;
    const cols = Math.ceil(width / blockSize);
    const rows = Math.ceil(height / blockSize);
    const totalBlocks = cols * rows;
    const visibleBlocks = Math.floor(totalBlocks * progress);

    const blocks = Array.from({ length: totalBlocks }, (_, i) => i);
    for (let i = blocks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
    }

    for (let i = 0; i < visibleBlocks; i++) {
      const blockIdx = blocks[i];
      const x = (blockIdx % cols) * blockSize;
      const y = Math.floor(blockIdx / cols) * blockSize;

      ctx.drawImage(
        bufferCanvas,
        x,
        y,
        blockSize,
        blockSize,
        x,
        y,
        blockSize,
        blockSize
      );
    }
  };

  const drawPixelated = (ctx, img, scale) => {
    const { width, height } = dimensions;
    if (!width || !height) return;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = Math.max(1, width * scale);
    tempCanvas.height = Math.max(1, height * scale);

    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

    ctx.clearRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      tempCanvas,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height,
      0,
      0,
      width,
      height
    );
  };

  const animatePixelation = (from, to) => {
    if (!isLoaded || !shouldAnimate) return;

    const steps = 4;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const animateStep = () => {
      const progress = currentStep / (steps - 1);
      const scale = from + (to - from) * progress;

      drawPixelated(canvasRef.current.getContext("2d"), imgRef.current, scale);
      currentStep++;

      if (currentStep < steps) {
        animationRef.current = setTimeout(animateStep, stepDuration);
      }
    };

    clearTimeout(animationRef.current);
    animateStep();
  };

  const animateRandomLoad = () => {
    if (!isLoaded || !shouldAnimate) return;

    const steps = 20;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const animateStep = () => {
      const progress = currentStep / (steps - 1);

      drawRandomPixelated(
        canvasRef.current.getContext("2d"),
        imgRef.current,
        initialScale,
        progress
      );

      currentStep++;

      if (currentStep < steps) {
        animationRef.current = setTimeout(animateStep, stepDuration);
      } else {
        drawPixelated(
          canvasRef.current.getContext("2d"),
          imgRef.current,
          initialScale
        );
      }
    };

    clearTimeout(animationRef.current);
    animateStep();
  };

  useEffect(() => {
    const img = imgRef.current;

    const handleLoad = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      setDimensions({ width, height });

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      setIsLoaded(true);
      setShouldAnimate(true);

      animateRandomLoad();
    };

    img.addEventListener("load", handleLoad);
    if (img.complete) handleLoad();

    return () => {
      img.removeEventListener("load", handleLoad);
      clearTimeout(animationRef.current);
    };
  }, [src]);

  useEffect(() => {
    if (!shouldAnimate) return;

    if (triggerHover) {
      animatePixelation(initialScale, 1);
    } else {
      animatePixelation(1, initialScale);
    }
  }, [triggerHover]);

  useEffect(() => {
    if (!shouldAnimate) return;

    if (isHovered) {
      animatePixelation(initialScale, 1);
    } else {
      animatePixelation(1, initialScale);
    }
  }, [isHovered]);

  return (
    <div
      className={`relative ${className} cursor-pointer`}
      onMouseEnter={() => {
        if (!isTouchDevice()) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!isTouchDevice()) setIsHovered(false);
      }}
      onClick={() => {
        if (isTouchDevice()) setIsHovered((prev) => !prev);
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ display: "none" }}
        crossOrigin="anonymous"
      />

      <canvas
        ref={canvasRef}
        style={{
          imageRendering: "pixelated",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="w-full h-full"
      />
    </div>
  );
}

export default PixelatedImage;
