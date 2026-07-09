import React, { useEffect, useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-[#050816]/85 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <a href="#hero" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-lg shadow-cyan-500/10">
            SV
          </span>
          <span className="text-base font-semibold tracking-wide text-white">
            Surthika<span className="text-cyan-300">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="mailto:surthikasathishraj@gmail.com"
          className="hidden rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-100 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-5 mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#08111f]/95 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-1 p-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
