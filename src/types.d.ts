import { resumeData } from "./resumeData.ts";

export type JobData = (typeof resumeData.experience)[number];
type SkillCategory =
  | "programmingLanguages"
  | "frameworks"
  | "tools"
  | "spokenLanguages";
