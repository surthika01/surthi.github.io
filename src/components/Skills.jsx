import React from 'react';

const skillGroups = [
  { title: 'Frontend', score: 92, skills: ['React.js', 'Vue.js', 'Tailwind CSS', 'Vuetify', 'Responsive UI'] },
  { title: 'Backend', score: 88, skills: ['Node.js', 'Express.js', 'Java Spring Boot', 'REST APIs', 'Validation'] },
  { title: 'Data', score: 84, skills: ['PostgreSQL', 'MySQL', 'Sequelize', 'Schema Design', 'Query Tuning'] },
  { title: 'Delivery', score: 86, skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'CI/CD'] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Skills</div>
            <h2 className="section-title mt-4">Modern stack, practical execution.</h2>
          </div>
          <p className="section-copy">
            A focused toolkit for shipping responsive interfaces, reliable APIs, and data-backed business platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="premium-card group p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                  {group.score}%
                </span>
              </div>

              <div className="mt-6 h-2 rounded-full bg-slate-800">
                <div className="skill-meter h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" style={{ '--skill-width': `${group.score}%` }} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300 transition group-hover:border-cyan-300/30 group-hover:text-cyan-100">
                    {skill}
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

export default Skills;
