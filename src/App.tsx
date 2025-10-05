import { useState } from "react";
import { resumeData } from "./resumeData";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { JobDetails } from "./components/JobDetails";
import { Badge } from "./components/Badge";
import { Timeline } from "./components/Timeline.tsx";

function App() {
  const [activeJobId, setActiveJobId] = useState(
    resumeData.experience[resumeData.experience.length - 1].id,
  );
  const activeJob = resumeData.experience.find((job) => job.id === activeJobId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006399] hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>{resumeData.contact.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Experience Timeline
        </h2>

        {/* Timeline */}
        <Timeline activeJobId={activeJobId} setActiveJobId={setActiveJobId} />

        {/* Job Details */}
        {activeJob && <JobDetails job={activeJob} />}
      </section>

      {/* Skills Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.programmingLanguages.map((skill, idx) => (
                  <Badge
                    key={idx}
                    text={skill.name}
                    category="programmingLanguages"
                    logo={skill.logo}
                    url={skill.url}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frameworks.map((skill, idx) => (
                  <Badge
                    key={idx}
                    text={skill.name}
                    category="frameworks"
                    logo={skill.logo}
                    url={skill.url}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((skill, idx) => (
                  <Badge
                    key={idx}
                    text={skill.name}
                    category="tools"
                    logo={skill.logo}
                    url={skill.url}
                  />
                ))}
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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Education
        </h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900">
            {resumeData.education.degree}
          </h3>
          <p className="text-lg text-blue-600 mt-1">
            {resumeData.education.school}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {resumeData.education.location} • {resumeData.education.dates}
          </p>
          <p className="text-gray-700 mt-4 italic">
            {resumeData.education.thesis}
          </p>
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
