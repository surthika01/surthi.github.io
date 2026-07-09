import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#040712] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-slate-200">
          Surthika Vasantha S<span className="text-cyan-300">.</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Built for clarity, speed, and professional impact.</p>
      </div>
    </footer>
  );
};

export default Footer;
