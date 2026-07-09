import React from 'react';

const strengths = [
  'Component-driven product interfaces',
  'REST API design and integration',
  'SQL schema planning and optimization',
  'Frontend leadership and code quality',
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-kicker">About Me</div>
        <div className="mt-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="section-title">
            I turn business workflows into polished, reliable software experiences.
          </h2>

          <div className="premium-panel p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              I am a full stack developer with hands-on experience across enterprise systems including CRM, HRMS, payroll automation, field force automation, access management, and asset platforms. My work bridges frontend usability and backend reliability, helping teams ship systems that are maintainable, responsive, and ready for real users.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-400">
              I enjoy building with React.js, Vue.js, Node.js, Java Spring Boot, PostgreSQL, MySQL, and AWS. I have also led frontend delivery, mentored developers, and established practical coding standards for scalable project execution.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                  <span className="text-sm font-semibold text-slate-200">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
