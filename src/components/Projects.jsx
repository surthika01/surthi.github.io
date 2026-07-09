import React from 'react';

const projects = [
  {
    title: 'Field Force Automation',
    company: 'Senzr AIOT',
    duration: 'Jul 2025 - Jan 2026',
    tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS S3'],
    summary: 'SaaS workflow platform for digital work orders, staff tracking, task assignment, and live field operations.',
  },
  {
    title: 'Payroll Automation Platform',
    company: 'Senzr AIOT',
    duration: 'Dec 2024 - Jun 2025',
    tech: ['React.js', 'Directus Plugin', 'AWS', 'Tailwind CSS'],
    summary: 'Payroll processing system with payslip generation, compliance calculations, and analytics dashboards.',
  },
  {
    title: 'Device Access Management',
    company: 'Senzr AIOT',
    duration: 'Jul 2024 - Nov 2024',
    tech: ['Vue.js', 'Vuetify', 'Node.js', 'PostgreSQL'],
    summary: 'Centralized access platform for attendance, entry and exit tracking, shift management, and permissions.',
  },
  {
    title: 'Trade Management Platform',
    company: 'Icanio Technologies',
    duration: 'Dec 2023 - Mar 2024',
    tech: ['Node.js', 'MySQL', 'REST APIs'],
    summary: 'Backend system for secure trade transactions, validation, audit tracking, and operational reporting.',
  },
  {
    title: 'Asset Management Platform',
    company: 'Icanio Technologies',
    duration: 'Sep 2023 - Dec 2023',
    tech: ['Node.js', 'PostgreSQL', 'Notifications'],
    summary: 'Asset tracking backend with status monitoring, reporting APIs, and notification workflows.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Projects</div>
            <h2 className="section-title mt-4">Recruiter-ready proof of impact.</h2>
          </div>
          <p className="section-copy">
            A selection of production-oriented products spanning field operations, payroll, access control, trade workflows, and asset systems.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card premium-card group p-6 sm:p-7 ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">{project.company}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                  {project.duration}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">{project.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-white/10 transition group-hover:text-cyan-100 group-hover:ring-cyan-300/30">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
