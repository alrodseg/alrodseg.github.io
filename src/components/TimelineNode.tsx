import type {JobData} from "../types";

interface TimelineNodeProps {
    job: JobData;
    isActive: boolean;
    onClick: () => void;
    isLast: boolean;
}

export const TimelineNode = ({ job, isActive, onClick, isLast }: TimelineNodeProps) => (
    <div className="flex items-center flex-shrink-0">
        <div className="flex flex-col items-center cursor-pointer group" onClick={onClick}>
            <img
                src={job.logo}
                alt={job.company}
                className={`w-12 h-12 rounded-full mb-3 transition-all ${isActive ? 'ring-4 ring-blue-500 scale-110' : 'ring-2 ring-gray-300 group-hover:ring-blue-400'}`}
            />
            <div className={`w-4 h-4 rounded-full transition-all ${isActive ? 'bg-blue-600 scale-125' : 'bg-gray-400 group-hover:bg-blue-400'}`} />
            <div className="text-center mt-3 max-w-[140px]">
                <div className={`font-semibold text-sm transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-500'}`}>
                    {job.company}
                </div>
                <div className="text-xs text-gray-500 mt-1">{job.dates}</div>
            </div>
        </div>
        {!isLast && (
            <div className="flex items-center mx-4">
                <div className="h-0.5 w-16 bg-gray-300" />
                <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-gray-300" />
            </div>
        )}
    </div>
);