import React from 'react';

const experiences = [
  {
    company: 'Bhumaha Solutions Private Limited',
    location: 'Chennai, IN',
    role: 'Full Stack Developer',
    duration: 'May 2026 - Present',
    points: [
      'Developing B2B CRM and HRMS applications with Java Spring Boot microservices, Angular, PostgreSQL, and MySQL.',
      'Building RESTful APIs and responsive modules across CRM and HRMS workflows.',
      'Designing multi-database schemas and improving query performance for enterprise use cases.',
    ],
  },
  {
    company: 'Senzr AIOT Partner Edge To Cloud',
    location: 'Srivaikundam, IN',
    role: 'Software Engineer',
    duration: 'Jul 2024 - Jan 2026',
    points: [
      'Led frontend development across multiple product modules, coordinating delivery timelines and implementation priorities.',
      'Mentored a team of 4 developers and introduced coding standards for scalable frontend delivery.',
      'Engineered RESTful APIs with payload validation to improve reliability across multi-tenant systems.',
    ],
  },
  {
    company: 'Icanio Technologies',
    location: 'Nazareth, IN',
    role: 'Backend Developer Trainee',
    duration: 'Sep 2023 - Mar 2024',
    points: [
      'Developed Node.js backend APIs with error handling, authentication support, and audit logging.',
      'Collaborated with engineers on production-ready services, API documentation, and testing support.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Work Experience</div>
            <h2 className="section-title mt-4">Enterprise software, delivered end to end.</h2>
          </div>
          <p className="section-copy">
            A professional path across full stack development, frontend leadership, backend APIs, and business workflow products.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {experiences.map((exp, index) => (
            <article key={exp.company} className="premium-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-blue-400 to-violet-400" />
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr]">
                <div>
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                    0{index + 1} / {exp.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="mt-3 text-base font-semibold text-cyan-200">{exp.company}</p>
                  <p className="mt-1 text-sm text-slate-400">{exp.location}</p>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
