const highlights = [
  { value: '2+', label: 'Years building production apps' },
  { value: '5', label: 'Enterprise projects delivered' },
  { value: '4', label: 'Developers mentored' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-5 pt-32 sm:px-8 lg:pt-40">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="floating-gradient floating-gradient-one" aria-hidden="true" />
      <div className="floating-gradient floating-gradient-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-reveal">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-500/10">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Available for software engineering roles
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Surthika Vasantha S
            <span className="animated-headline mt-4 block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build scalable web platforms across React, Vue, Node.js, Java Spring Boot, SQL, and cloud services with a strong focus on clean interfaces, reliable APIs, and practical engineering leadership.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              View Projects
              <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative animate-reveal-delay">
          <div className="premium-panel p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Engineer Profile</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Frontend + Backend Delivery</h2>
              </div>
              <div className="h-14 w-14 rounded-2xl border border-violet-300/30 bg-violet-300/10 shadow-lg shadow-violet-500/10" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <p className="text-3xl font-black text-cyan-200">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {['React and Vue interfaces', 'REST APIs and database design', 'CRM, HRMS, payroll, access systems'].map((item, index) => (
                <div key={item} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition duration-300 hover:border-blue-300/40 hover:bg-blue-300/10">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-400 text-sm font-black text-slate-950">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
    </section>
  );
};

export default Hero;
