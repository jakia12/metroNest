// app/components/ContactSection.jsx
"use client";

import { ChevronDown, Mail, MessageCircle, Phone, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake submit – replace with your API call
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  };

  return (
    <section className="w-full bg-[#f7f2f0] py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl bg-[#f7f2f0] px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:px-8">
        {/* LEFT: FORM */}
        <div className="flex items-center">
          <div className="w-full rounded-3xl bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Do you have questions?{" "}
              <span className="block sm:inline">Contact Us</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Our real estate experts are here to help you with any questions
              about buying, selling, or renting a property.
            </p>

            {/* Quick contact info */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="inline-flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/90 text-white text-[14px]">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <span>contact@metronestrealty.com</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/90 text-white text-[14px]">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span>+00 (123) 456 789 00</span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 text-xs sm:text-sm"
            >
              {/* Name + Phone */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-[11px] font-medium text-slate-600">
                    Name *
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500/20">
                    <User className="h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-medium text-slate-600">
                    Phone *
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500/20">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+00 123 456 789"
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-600">
                  Email Address *
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500/20">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-xs sm:text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-600">
                  Select Subject
                </label>
                <div className="relative">
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500/20">
                    <MessageCircle className="h-4 w-4 text-slate-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-900 outline-none appearance-none"
                    >
                      <option value="">Select Subject</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="renting">Renting / Leasing</option>
                      <option value="investment">Investment Advice</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-slate-600">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about what you’re looking for..."
                  className="h-28 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                  required
                />
              </div>

              {/* Button + status */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-[#ff4b4b] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:translate-y-[1px] hover:bg-[#f04141] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <span className="text-[11px] sm:text-xs text-emerald-600">
                    ✅ Your message has been sent. We’ll get back to you soon.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative mt-4 h-72 overflow-hidden rounded-3xl bg-slate-900 sm:h-80 lg:mt-0 lg:h-full">
          <Image
            src="/images/contact-agent.jpg" // put your image in public/images/
            alt="Real estate agent in front of modern building"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient overlay + small badge */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-800 shadow-sm">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-[11px]">
              ✓
            </span>
            Verified Metro Nest Agent
          </div>

          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Metro Nest Real Estate
            </p>
            <p className="text-sm font-semibold">
              Personal guidance for every step
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
