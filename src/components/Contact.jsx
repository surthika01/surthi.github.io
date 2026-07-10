import React, { useState } from 'react';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/surthika-sathishraj-b396213b1/' },
  { label: 'Email', href: 'mailto:surthikasathishraj@gmail.com' },
];

const Contact = () => {
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", "2972c5e4-9320-4f8a-80f0-30bd54821ad0");
    formData.append("subject", "New Message from Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        e.target.reset(); // Clear the form fields after successful submission
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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

          <form className="premium-panel grid gap-5 p-6 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Name
                <input className="field-input" type="text" name="name" placeholder="Your name" required disabled={status === 'submitting'} />
              </label>
              <label className="field-label">
                Email
                <input className="field-input" type="email" name="email" placeholder="you@example.com" required disabled={status === 'submitting'} />
              </label>
            </div>
            <label className="field-label">
              Subject
              <input className="field-input" type="text" name="Subject (Custom)" placeholder="Role, project, or collaboration" required disabled={status === 'submitting'} />
            </label>
            <label className="field-label">
              Message
              <textarea className="field-input min-h-36 resize-y" name="message" placeholder="Tell me what you would like to discuss" required disabled={status === 'submitting'} />
            </label>
            <button
              className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 disabled:opacity-70 disabled:hover:translate-y-0"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-3 text-sm font-bold text-emerald-400 text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-3 text-sm font-bold text-red-400 text-center">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
