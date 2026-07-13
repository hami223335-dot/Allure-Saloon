import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
  id?: string;
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  yOffset?: number; // The distance to translate (creates the depth effect)
  scaleStart?: number; // Base zoom to prevent showing empty edges during translate
  scaleHover?: number; // Optional zoom factor on hover
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function ParallaxImage({
  id,
  src,
  alt,
  className = '',
  containerClassName = '',
  yOffset = 30,
  scaleStart = 1.15,
  scaleHover,
  referrerPolicy = 'no-referrer',
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map the scroll progress (0 to 1) to a vertical transform (-yOffset to yOffset)
  // This moves the image opposite to the scroll direction, creating a cinematic parallax depth
  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`overflow-hidden relative ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        initial={{ scale: scaleStart }}
        whileHover={scaleHover ? { scale: scaleHover } : undefined}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`w-full h-full object-cover ${className}`}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
}
