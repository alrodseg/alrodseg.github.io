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
      <div className="flex items-center justify-start min-w-max">
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
