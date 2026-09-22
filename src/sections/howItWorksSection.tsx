// import { ArrowRight } from "lucide-react";
import { howItWorks } from "../dataStore/datafile";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-[#011B22] px-4 py-16 font-montserrat sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1130px]">
        <div className="mx-auto max-w-2xl text-center">
          <span
            style={{
              background:
                "linear-gradient(#011B22, #011B22) padding-box, linear-gradient(to right, #F1D7B5, #EB67A0) border-box",
            }}
            className="inline-flex w-fit items-center uppercase rounded-full border border-transparent px-3 py-1 text-[10px] tracking-wide text-white"
          >
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Send money with less friction
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            <span className="text-[#F1D7B5]">MYBCASH</span> helps people move
            cash, pay bills, and manage currencies from one secure place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((item) => (
            <div
              key={item.step}
              className="group rounded-[28px] border border-white/10 bg-[#012933] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center">
                <div className="flex w-12 items-center justify-center rounded-[10px] bg-[#011B22] p-3 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F1D7B5]">
                    {item.step}
                  </span>
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
