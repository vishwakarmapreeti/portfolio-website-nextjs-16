"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  opacityFrom?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

const ScrollReveal = ({
  children,
  className,
  offsetY = 12,
  opacityFrom = 0.2,
  duration = 0.45,
  delay = 0,
  ease = "power2.out",
  stagger,
  as: Wrapper = "div",
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const targets =
      typeof stagger === "number"
        ? element.children
        : element;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: opacityFrom,
          y: offsetY,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          stagger,
          clearProps: "all",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [offsetY, opacityFrom, duration, delay, ease, stagger]);

  const Tag = Wrapper as any;

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;