"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

type LinkPreviewProps = {
  children: React.ReactNode;
  image: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
};

export const ImagePreview = ({
  children,
  image,
  width = 150,
  height = 125,
  quality = 100,
  layout = "fixed",
}: LinkPreviewProps) => {
  const [isOpen, setOpen] = useState(false);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger onMouseMove={handleMouseMove}>
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className='[transform-origin:var(--radix-hover-card-content-transform-origin)]'
          side='top'
          align='center'
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className='shadow-xl rounded-xl'
                style={{
                  x: translateX,
                }}
              >
                <Image
                  src={image}
                  width={width}
                  height={height}
                  quality={quality}
                  layout={layout}
                  priority={true}
                  alt='image'
                  unoptimized={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
