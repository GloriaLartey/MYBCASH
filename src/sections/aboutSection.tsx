import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { securityPoints } from "../dataStore/datafile";

const contactDetails = [
  {
    icon: Mail,
    label: "helpcenter@mybcash.com",
    href: "mailto:helpcenter@mybcash.com",
  },
  { icon: Phone, label: "+233 20 000 0000", href: "tel:+2332000000" },
  { icon: MapPin, label: "Accra, Ghana" },
];

export default function AboutSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section
      id="about"
      className="relative bg-[#011B22] px-4 py-16 font-montserrat sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1130px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span
              style={{
                background:
                  "linear-gradient(#011B22, #011B22) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
              }}
              className="inline-flex w-fit items-center uppercase rounded-full border border-transparent px-3 py-1 text-[10px] tracking-wide text-white"
            >
              About Us
            </span>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              One wallet built for people who move money every day.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base lg:mx-0">
              MYBCASH helps you save, send, pay, and swap currencies from one
              secure place. Whether you are supporting family abroad, topping up
              your wallet, or managing international payments, everything is
              designed to feel simple, fast, and transparent.
            </p>

            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 lg:mx-0">
              {[
                { label: "Active Users", value: "500K+" },
                { label: "Countries Served", value: "40+" },
                { label: "Transactions Daily", value: "120K+" },
                { label: "Support", value: "24/7" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#012933] px-4 py-3 text-center lg:text-left"
                >
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/60 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 lg:mx-0">
              {contactDetails.map(({ icon: Icon, label, href }) => {
                const content = (
                  <span className="flex items-center justify-center gap-3 text-sm text-white/75 lg:justify-start">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#012933]">
                      <Icon className="h-4 w-4 text-[#EB6CA1]" />
                    </span>
                    {label}
                  </span>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#012933] p-6 sm:p-8 lg:p-10">
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Get in touch
            </h3>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              Have a question or need help? Send us a message and our team will
              get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-white/70"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-[#011B22] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#EB6CA1]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-white/70"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#011B22] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#EB6CA1]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-white/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#011B22] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#EB6CA1]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message sent ✓"
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-[11px] text-white/55">
                <span>Privacy-first support</span>
                <span className="inline-flex items-center gap-1 text-white/80">
                  Request callback
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
