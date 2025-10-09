import { useRef, useState } from "react";
import { resumeData } from "./resumeData";
import { JobDetails } from "./components/JobDetails";
import { Badge } from "./components/Badge";
import { Timeline } from "./components/Timeline.tsx";
import linkedinLogo from "./assets/linkedin-logo.svg";
import githubLogo from "./assets/github-logo.svg";
import envelopeIcon from "./assets/envelope-icon.svg";

function App() {
  const [activeJobId, setActiveJobId] = useState(
    resumeData.experience[resumeData.experience.length - 1].id,
  );
  const activeJob = resumeData.experience.find((job) => job.id === activeJobId);
  const experiencesRef = useRef<HTMLHeadingElement>(null);

  const handleClickJob = () => {
    if (!experiencesRef.current) {
      return null;
    }

    window.scrollTo({
      top: experiencesRef.current.offsetTop - 24,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {resumeData.name}
            </h1>
            <p className="text-2xl text-blue-600 font-medium mb-6">
              {resumeData.title}
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {resumeData.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="cursor-pointer group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all shadow-md hover:shadow-lg"
                onClick={() =>
                  (window.location.href = `mailto:${resumeData.contact.email}`)
                }
              >
                <img src={envelopeIcon} alt={"email"} className="w-5 h-5" />
                <span>Email Me</span>
              </button>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                <img src={githubLogo} alt={"github logo"} className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006399] hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                <img
                  src={linkedinLogo}
                  alt={"linkedin logo"}
                  className="w-5 h-5"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-8 md:py-16">
        <h2
          ref={experiencesRef}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Experience Timeline
        </h2>

        {/* Timeline */}
        <Timeline
          onClickJob={handleClickJob}
          activeJobId={activeJobId}
          setActiveJobId={setActiveJobId}
        />

        {/* Job Details */}
        {activeJob && <JobDetails job={activeJob} />}
      </section>

      {/* Skills Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(resumeData.skills.programmingLanguages).map(
                  ([name, { logo, url }], idx) => (
                    <Badge
                      key={idx}
                      text={name}
                      category="programmingLanguages"
                      logo={logo}
                      url={url}
                    />
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(resumeData.skills.frameworks).map(
                  ([name, { logo, url }], idx) => (
                    <Badge
                      key={idx}
                      text={name}
                      category="frameworks"
                      logo={logo}
                      url={url}
                    />
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(resumeData.skills.tools).map(
                  ([name, { logo, url }], idx) => (
                    <Badge
                      key={idx}
                      text={name}
                      category="tools"
                      logo={logo}
                      url={url}
                    />
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.spokenLanguages.map((skill, idx) => (
                  <Badge
                    key={idx}
                    text={skill.name}
                    category="spokenLanguages"
                    flag={skill.flag}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 py-8 md:py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((education, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 w-full mx-auto"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {education.degree}
              </h3>
              <p className="text-lg text-blue-600 mt-1">{education.school}</p>
              <p className="text-sm text-gray-500 mt-1">
                {education.location} • {education.dates}
              </p>
              {education.notes && (
                <p className="text-gray-700 mt-4 italic">{education.notes}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            © {new Date().getFullYear()} {resumeData.name}. Built with React,
            TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
