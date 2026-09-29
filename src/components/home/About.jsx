import React from "react";

const team = [
  {
    name: "Mohd Mobeen",
    role: "Director",
    img: "https://res.cloudinary.com/dcx2gs6mm/image/upload/v1790676102/Mohd_Mobeen_omxepf.jpg",
  },
  {
    name: "Mohammmed Tauquir",
    role: "Director",
    img: "https://res.cloudinary.com/dcx2gs6mm/image/upload/v1790676101/Mohd_Tauquir_oiflua.png",
  },
  {
    name: "Mohd Zaid",
    role: "Associate Director",
    img: "https://res.cloudinary.com/dcx2gs6mm/image/upload/v1790676104/Zaid_Bhai_tu9hju.jpg",
  },
];

const stats = [
  { value: "30+", label: "Successful projects" },
  { value: "12+ Years", label: "Of industry leadership" },
  { value: "2012", label: "Crafting excellence since" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-light relative overflow-hidden"
    >
      <div
        className="absolute -left-32 top-1/4 w-[420px] h-[420px] rounded-full bg-accent/5 blur-[90px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-8 relative z-10">
        {/* Section header + intro — matches Portfolio / Process */}
        <div
          className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 mb-12 md:mb-16"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-[0.7rem] font-black uppercase tracking-[5px] text-blue/40">
                Crafting Excellence since 2012{" "}
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-blue leading-[1.1] tracking-tighter">
              The Art of{" "}
              <span className="text-accent italic font-black underline">
                Precision{" "}
              </span>{" "}
              Engineering.
            </h2>
          </div>

          <div className="max-w-[480px] space-y-5">
            <p className="text-[1.05rem] font-medium text-dark/90 leading-relaxed">
              <span className="font-bold text-blue">
                Craftech Engineers Pvt. Ltd.
              </span>{" "}
              is more than a construction firm. We are a single-point hub for
              visionaries seeking absolute precision in MEP execution,
              specialized EPC contracting, and custom interior fit-out
              solutions.
            </p>
            <p className="text-[0.95rem] text-mid leading-relaxed opacity-80">
              With a decade-long track record across Mumbai's elite residential
              and commercial sectors, we implement Lean Construction workflows —
              a strict discipline that eliminates wastage and maximizes value at
              every phase of the project lifecycle.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-blue/10 rounded-[28px] bg-blue/[0.04] border border-blue/[0.08] px-6 py-8 md:px-10 md:py-10 mb-16 md:mb-20"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center md:items-start text-center md:text-left md:px-6 first:md:pl-0 last:md:pr-0"
            >
              <span className="text-[clamp(2.25rem,4vw,3rem)] font-black text-blue leading-none tracking-tight">
                {item.value}
              </span>
              <span className="mt-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-mid max-w-[14rem]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <div className="max-w-[800px] mb-12 md:mb-16" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-[0.7rem] font-black uppercase tracking-[5px] text-blue/40">
                Meet the core team
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-blue leading-[1.1] tracking-tighter">
              Our {""}
              <span className="text-accent italic font-black underline decoration-4 underline-offset-[10px] decoration-accent">
                Leaders.
              </span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-10 list-none p-0 m-0">
            {team.map((person, i) => (
              <li
                key={person.name + i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <article className="group">
                  <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-blue/5 shadow-[0_12px_40px_rgba(10,38,71,0.08)]">
                    <img
                      src={person.img}
                      alt={person.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="pt-5 text-center">
                    <h3 className="text-xl md:text-2xl font-extrabold text-blue tracking-tight ">
                      {person.name}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base font-semibold uppercase tracking-wider text-accent">
                      {person.role}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
