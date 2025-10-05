import {Badge} from "./Badge.tsx";
import type {JobData} from "../types";
import {getSkillCategory} from "../helpers.ts";

interface JobDetailsProps {
    job: JobData;
}

export const JobDetails = ({ job }: JobDetailsProps) => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-lg text-blue-600 mt-1">{job.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <p className="text-sm font-medium text-gray-600">{job.dates}</p>
                    <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>
            <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string, idx: number) => (
                    <Badge key={idx} text={skill} category={getSkillCategory(skill)} />
                ))}
            </div>
        </div>
    );
};