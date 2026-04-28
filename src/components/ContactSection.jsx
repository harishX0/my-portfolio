import { Code2, Globe, Mail, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

const iconMap = {
  GitHub: Code2,
  LinkedIn: Globe,
  Email: Mail,
};

function ContactSection({ email, socialLinks }) {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-200 pt-14 sm:pt-16">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build something useful together."
        description="Share your project idea or role details, and I will reply with a practical plan."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="grid gap-4 border border-slate-200 bg-white p-6">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Full Name
            <input
              type="text"
              placeholder="Your name"
              className="border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-teal-500"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-teal-500"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="resize-none border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-teal-500"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 border border-slate-900 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-800"
          >
            Send Message
            <Send size={16} />
          </button>
        </form>

        <div className="space-y-4">
          <div className="border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Direct Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-base font-semibold text-teal-700 transition-colors duration-300 hover:text-teal-800"
            >
              {email}
            </a>
          </div>

          <div className="grid gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name] ?? Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-700"
                >
                  <span>{link.name}</span>
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
