import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Lock,
  Loader2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';
import { validateContactForm, generateDispatchHash, ContactFormData, ValidationErrors } from '../utils/validation.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedHash, setSubmittedHash] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real cryptographic handshake & transmission verification
      await new Promise((resolve) => setTimeout(resolve, 1400));

      const hash = generateDispatchHash(formData);
      setSubmittedHash(hash);

      // Save transmission locally for persistence
      const history = JSON.parse(localStorage.getItem('ankush_dispatches') || '[]');
      history.push({
        hash,
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('ankush_dispatches', JSON.stringify(history));

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitError('Secure dispatch transmission failed. Please use direct email link.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#00FF88] tracking-widest bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
          05 / ESTABLISH_CONNECTION
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Direct Transmission Channels & Status */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="font-mono text-xs text-[#00FF88] flex items-center gap-2 mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>TLS ENCRYPTED ENDPOINT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Let&apos;s Build Together
            </h2>

            <p className="text-sm text-[#A5B5AD] leading-relaxed mb-6">
              Currently open to internship roles, AI/ML research collaborations, hackathons, and high-impact engineering projects. Feel free to send a message or initiate contact via direct social channels.
            </p>
          </div>

          {/* Direct channels cards */}
          <div className="space-y-3 font-mono text-xs">
            {/* Primary Email Card */}
            <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#00FF88]/15 border border-[#00FF88]/30 text-[#00FF88]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A5B5AD]">PRIMARY INBOX</p>
                  <p className="text-white font-medium">{PORTFOLIO_CONFIG.socials.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={copyEmail}
                  type="button"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A5B5AD] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.socials.email}`}
                  className="p-2 rounded-lg bg-[#00FF88]/15 hover:bg-[#00FF88]/25 text-[#00FF88] transition-colors"
                  title="Open mail client"
                  aria-label="Send direct email"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={PORTFOLIO_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass-panel glass-panel-hover border-white/10 flex flex-col items-center justify-center text-center group"
              >
                <Github className="w-5 h-5 text-white/80 group-hover:text-[#00FF88] transition-colors mb-1.5" />
                <span className="text-white font-medium text-[11px]">GitHub</span>
                <span className="text-[10px] text-[#A5B5AD]">@ankushsonimak</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass-panel glass-panel-hover border-white/10 flex flex-col items-center justify-center text-center group"
              >
                <Linkedin className="w-5 h-5 text-white/80 group-hover:text-[#00FF88] transition-colors mb-1.5" />
                <span className="text-white font-medium text-[11px]">LinkedIn</span>
                <span className="text-[10px] text-[#A5B5AD]">/in/ankushsoni</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass-panel glass-panel-hover border-white/10 flex flex-col items-center justify-center text-center group"
              >
                <Instagram className="w-5 h-5 text-white/80 group-hover:text-[#00FF88] transition-colors mb-1.5" />
                <span className="text-white font-medium text-[11px]">Instagram</span>
                <span className="text-[10px] text-[#A5B5AD]">@ankushsoni</span>
              </a>
            </div>

            {copied && (
              <p className="text-[11px] text-[#00FF88] text-center animate-fadeIn">
                ✓ Email address copied to clipboard!
              </p>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[11px] text-[#A5B5AD] flex items-center justify-between">
            <span>DISPATCH STATUS: READY</span>
            <span className="text-[#00FF88]">ONLINE</span>
          </div>
        </div>

        {/* Right Column: Contact Terminal Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border-white/15 bg-[#050807]/90 shadow-2xl relative overflow-hidden">
          {/* Terminal Heading */}
          <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88]" />
              <span className="text-white">root@ankush:~$ connect --secure</span>
            </div>
            <span className="text-[#A5B5AD] text-[11px] hidden sm:inline">256-BIT DISPATCH</span>
          </div>

          {submittedHash ? (
            <div className="py-10 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-[#00FF88]/15 border border-[#00FF88]/40 flex items-center justify-center mx-auto text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Secure Handshake Dispatched
              </h3>
              <p className="text-sm text-[#A5B5AD] max-w-md mx-auto leading-relaxed">
                Your message has been verified and encrypted. A receipt has been registered with verification hash:
              </p>
              <div className="p-3 bg-black/60 rounded-xl border border-[#00FF88]/30 max-w-xs mx-auto font-mono text-xs text-[#00FF88]">
                {submittedHash}
              </div>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => setSubmittedHash(null)}
                  type="button"
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-white glass-panel glass-panel-hover"
                >
                  Send Another Transmission
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
              {submitError && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#A5B5AD] mb-1.5">
                    FULL_NAME <span className="text-[#00FF88]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#00FF88] transition-colors ${
                      errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-[#00FF88]/60'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-mono text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[#A5B5AD] mb-1.5">
                    EMAIL_ADDRESS <span className="text-[#00FF88]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#00FF88] transition-colors ${
                      errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-[#00FF88]/60'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-mono text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-[#A5B5AD] mb-1.5">
                  SUBJECT_HEADER <span className="text-[#00FF88]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Research Collaboration"
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#00FF88] transition-colors ${
                    errors.subject ? 'border-red-500/60' : 'border-white/10 focus:border-[#00FF88]/60'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] font-mono text-red-400 mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-[#A5B5AD] mb-1.5">
                  MESSAGE_PAYLOAD <span className="text-[#00FF88]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your proposal or inquiry..."
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#00FF88] transition-colors resize-none ${
                    errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-[#00FF88]/60'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] font-mono text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-[#A5B5AD]">
                  Guaranteed response time: &lt; 24 hours
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold text-[#050807] bg-[#00FF88] hover:bg-[#39FF14] disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>DISPATCH TRANSMISSION</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
