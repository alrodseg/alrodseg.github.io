import { resumeData } from "./resumeData.ts";
import type { SkillCategory } from "./types";

export const getSkillCategory = (skill: string): SkillCategory => {
  if (
    resumeData.skills.programmingLanguages[
      skill as keyof typeof resumeData.skills.programmingLanguages
    ]
  )
    return "programmingLanguages";
  if (
    resumeData.skills.frameworks[
      skill as keyof typeof resumeData.skills.frameworks
    ]
  )
    return "frameworks";
  return "tools";
};

export const getSkillLogo = (skillName: string): string => {
  const skill = resumeData.skills.programmingLanguages[
    skillName as keyof typeof resumeData.skills.programmingLanguages
  ] ||
    resumeData.skills.frameworks[
      skillName as keyof typeof resumeData.skills.frameworks
    ] ||
    resumeData.skills.tools[
      skillName as keyof typeof resumeData.skills.tools
    ] || {
      logo: "",
    };
  return skill.logo;
};
