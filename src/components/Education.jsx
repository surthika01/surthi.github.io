import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Education</div>
            <h2 className="section-title mt-4">Engineering foundation with product mindset.</h2>
          </div>
          <p className="section-copy">
            Formal electronics and communication training, strengthened by practical full stack engineering experience.
          </p>
        </div>

        <article className="premium-panel mt-12 p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Sep 2019 - Jun 2023</p>
              <h3 className="mt-4 text-3xl font-black text-white">Bachelor of Engineering</h3>
              <p className="mt-3 text-lg font-semibold text-slate-200">Electronics and Communication Engineering</p>
              <p className="mt-2 text-slate-400">Dr. Sivanthi Aditanar College of Engineering, Tiruchchendur</p>
            </div>

            <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-6 text-center shadow-xl shadow-cyan-500/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">CGPA</p>
              <p className="mt-2 text-5xl font-black text-white">7.8</p>
              <p className="mt-1 text-sm text-slate-400">out of 10</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
