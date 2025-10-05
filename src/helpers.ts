import { resumeData } from "./resumeData.ts";
import type { SkillCategory } from "./types";

export const getSkillCategory = (skill: string): SkillCategory => {
  if (resumeData.skills.programmingLanguages.some((s) => s.name === skill))
    return "programmingLanguages";
  if (
    resumeData.skills.frameworks.some(
      (f) => skill.includes(f.name) || f.name.includes(skill),
    )
  )
    return "frameworks";
  return "tools";
};
