import { resumeData } from "../resumeData.ts";
import { TimelineNode } from "./TimelineNode.tsx";

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
  return (
    <div className="mb-12 overflow-x-auto pb-4">
      <div className="flex items-center justify-start min-w-max px-4">
        {resumeData.experience.map((job, idx) => (
          <TimelineNode
            key={job.id}
            job={job}
            isActive={job.id === activeJobId}
            isLast={idx === resumeData.experience.length - 1}
            onClick={() => {
              onClickJob();
              setActiveJobId(job.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};
