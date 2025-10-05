import { resumeData } from "../resumeData.ts";
import { TimelineNode } from "./TimelineNode.tsx";

interface TimelineProps {
  activeJobId: number;
  setActiveJobId: (activeJobId: number) => void;
}

export const Timeline = ({ setActiveJobId, activeJobId }: TimelineProps) => {
  return (
    <div className="mb-12 overflow-x-auto pb-4">
      <div className="flex items-center justify-start min-w-max px-4">
        {resumeData.experience.map((job, idx) => (
          <TimelineNode
            key={job.id}
            job={job}
            isActive={job.id === activeJobId}
            isLast={idx === resumeData.experience.length - 1}
            onClick={() => setActiveJobId(job.id)}
          />
        ))}
      </div>
    </div>
  );
};
