import type { SkillCategory } from "../types";

interface BadgeProps {
  text: string;
  category: SkillCategory;
  logo?: string;
  url?: string;
  flag?: string;
}

export const Badge = ({ text, category, logo, url, flag }: BadgeProps) => {
  const colors = {
    programmingLanguages: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    frameworks: "bg-purple-100 text-purple-700 hover:bg-purple-200",
    tools: "bg-orange-100 text-orange-700 hover:bg-orange-200",
    spokenLanguages: "bg-green-100 text-green-700 hover:bg-green-200",
  };

  const content = (
    <>
      {flag && <span className="text-lg mr-2">{flag}</span>}
      {logo && <img src={logo} alt={text} className="w-5 h-5 mr-2" />}
      <span>{text}</span>
    </>
  );

  const className = `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all ${colors[category] || "bg-gray-100 text-gray-700"}`;

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:scale-105`}
      >
        {content}
      </a>
    );
  }

  return (
    <span className={`${className} hover:scale-105 cursor-default`}>
      {content}
    </span>
  );
};
