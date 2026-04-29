import { useState } from "react";
import {
  CheckCircle2,
  Code2,
  Globe,
  Mail,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const iconMap = {
  GitHub: Code2,
  LinkedIn: Globe,
  Email: Mail,
  WhatsApp: MessageCircle,
};

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

function ContactSection({ email, phone, socialLinks }) {
  const [formData, setFormData] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState("");

  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name.trim()}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatusMessage("Your mail app has been opened with the message details ready to send.");
    setFormData(initialFormState);
  };

  return (
    <section
      id="contact"
      data-reveal
      className="reveal-section scroll-mt-24 border-t border-white/10 pt-14 sm:pt-16"
    >
      <SectionTitle
        eyebrow="Contact"
        title="Let us build something useful together."
        description="Share your project idea or role details, and I will reply with a practical plan. You can also reach me directly on Gmail or WhatsApp."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-lg border border-white/10 bg-slate-950/45 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/20 hover:shadow-[0_28px_80px_-46px_rgba(34,211,238,0.4)]"
        >
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.07]"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.07]"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Message
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.07]"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/18 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/24"
          >
            Send Message
            <Send size={16} />
          </button>

          {statusMessage ? (
            <p className="inline-flex items-start gap-2 text-sm text-emerald-300" aria-live="polite">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>{statusMessage}</span>
            </p>
          ) : null}
        </form>

        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_22px_50px_-34px_rgba(34,211,238,0.38)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Direct Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-base font-semibold text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
            >
              {email}
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/20 hover:shadow-[0_22px_50px_-34px_rgba(16,185,129,0.38)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              WhatsApp
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-emerald-300 transition-colors duration-300 hover:text-emerald-200"
            >
              <PhoneCall size={16} />
              {phone}
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
                  className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-slate-900/65 hover:text-cyan-200 hover:shadow-[0_18px_42px_-28px_rgba(34,211,238,0.38)]"
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
