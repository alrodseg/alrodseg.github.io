import { resumeData } from "../resumeData.ts";
import { TimelineNode } from "./TimelineNode.tsx";
import { useCallback, useEffect, useRef, useState } from "react";

interface TimelineProps {
  activeJobId: number;
  setActiveJobId: (activeJobId: number) => void;
  onClickJob: () => void;
}

export const Timeline = ({
  setActiveJobId,
  activeJobId,
  onClickJob,
}: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const throttleTimeout = useRef<number | null>(null);

  const throttle = useCallback((callback: () => void, delay: number) => {
    if (throttleTimeout.current) return;
    throttleTimeout.current = window.setTimeout(() => {
      callback();
      throttleTimeout.current && clearTimeout(throttleTimeout.current);
      throttleTimeout.current = null;
    }, delay);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isHovered || window.innerWidth > container.scrollWidth)
      return;

    const handleMouseMove = (e: MouseEvent) => {
      throttle(() => {
        const rect = container.getBoundingClientRect();
        const relativeX = e.clientX - rect.left; // X position inside the div
        const percentX = Math.min(Math.max(relativeX / rect.width, 0), 1); // Clamp 0–1
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft = percentX * maxScroll;
      }, 8); // ~120fps throttle (8ms)
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  useEffect(() => {
    if (
      !containerRef.current ||
      window.innerWidth > containerRef.current.scrollWidth
    ) {
      return;
    }
    containerRef.current.scrollLeft = containerRef.current.scrollWidth;
  }, []);

  return (
    <div
      ref={containerRef}
      className="mb-12 overflow-x-auto no-scrollbar animate-fadeIn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center min-w-max">
        {resumeData.experience.map((job, idx) => (
          <>
            <TimelineNode
              key={job.id}
              job={job}
              isActive={job.id === activeJobId}
              onClick={() => {
                onClickJob();
                setActiveJobId(job.id);
              }}
            />
            {idx !== resumeData.experience.length - 1 && (
              <div className="flex items-center mx-4">
                <div className="h-0.5 w-16 bg-gray-300" />
                <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-gray-300" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
