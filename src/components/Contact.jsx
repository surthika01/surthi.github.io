import React from 'react';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/surthika-vasantha-51739822b/' },
  { label: 'Email', href: 'mailto:surthikasathishraj@gmail.com' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-kicker">Contact</div>
            <h2 className="section-title mt-4">Let us build something polished and useful.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I am open to full stack and frontend engineering opportunities where thoughtful UI, dependable APIs, and product ownership matter.
            </p>

            <div className="mt-8 space-y-3">
              <a className="contact-link" href="mailto:surthikasathishraj@gmail.com">
                surthikasathishraj@gmail.com
              </a>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-100">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="premium-panel grid gap-5 p-6 sm:p-8" action="mailto:surthikasathishraj@gmail.com" method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Name
                <input className="field-input" type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="field-label">
                Email
                <input className="field-input" type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label className="field-label">
              Subject
              <input className="field-input" type="text" name="subject" placeholder="Role, project, or collaboration" required />
            </label>
            <label className="field-label">
              Message
              <textarea className="field-input min-h-36 resize-y" name="message" placeholder="Tell me what you would like to discuss" required />
            </label>
            <button className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
