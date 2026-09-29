import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#portfolio" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Building Construction", href: "#services" },
    { name: "Interior Fit Outs", href: "#services" },
    { name: "MEP Execution", href: "#services" },
    { name: "Project Management", href: "#services" },
    { name: "Cost Consultancy", href: "#services" },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <img
              src="https://res.cloudinary.com/dcx2gs6mm/image/upload/v1790235620/craftech/branding/wshft0z2prpfam2m9acu.png"
              alt="Logo"
              className="w-[220px]"
            />
            <p className="text-[0.9rem] text-mid leading-relaxed">
              Your single-stop partner for construction, MEP execution, interior
              fit-outs, and project management across Mumbai.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "fa-linkedin-in", link: "#" },
                {
                  icon: "fa-instagram",
                  link: "https://www.instagram.com/craftech_engg/",
                  target: "_blank",
                },
                {
                  icon: "fa-whatsapp",
                  link: "https://wa.me/+918169049025",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue hover:bg-blue hover:text-white hover:border-blue transition-all duration-300"
                >
                  <i className={`fa-brands ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-blue mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-mid hover:text-blue hover:pl-2 transition-all flex items-center gap-2"
                  >
                    <i className="fa-solid fa-chevron-right text-[0.6rem]" />{" "}
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-blue mb-8">Our Services</h4>
            <ul className="space-y-4">
              {services.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-mid hover:text-blue hover:pl-2 transition-all flex items-center gap-2"
                  >
                    <i className="fa-solid fa-chevron-right text-[0.6rem]" />{" "}
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-blue mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-phone text-blue mt-1" />
                <a
                  href="tel:+918169049025"
                  className="text-sm font-black text-mid hover:text-blue transition-colors"
                >
                  +91 816 904 9025
                </a>
              </li>
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-envelope text-blue mt-1" />
                <a
                  href="mailto:m.tauquir@craftech-engg.com"
                  className="text-sm font-black text-mid hover:text-blue transition-colors"
                >
                  m.tauquir@craftech-engg.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-blue mt-1" />
                <a
                  href="https://maps.app.goo.gl/XagkADPg9fYQdzvu9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm font-medium text-mid hover:text-blue transition-colors">
                    1ST FLOOR, LOONAWAT COMPOUND, Ghaswala Estate, 142/147,
                    Swami Vivekanand Rd, opp. 24 Karat, Shastri Nagar,
                    Jogeshwari West, Mumbai, Maharashtra 400102{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6 text-[0.8rem] font-bold text-mid uppercase tracking-[1px]">
          <p>
            © 2026{" "}
            <span className="text-blue">Craftech Engineers Pvt. Ltd.</span> All
            rights reserved.
          </p>
          <p>
            Built with <span className="text-accent">♥</span> for excellence in
            construction.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
