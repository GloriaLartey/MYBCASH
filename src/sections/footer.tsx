import { Mail, MapPin } from "lucide-react";
import DownloadButtons from "../components/heroSectionComponents/downloadOptions";
import { scrollToSection } from '../hooks/scrollToSection'
import type { NavLink } from "../dataStore/datafile";

const linkColumns: {
  title: string;
  links: { label: string; navLink?: NavLink; href?: string }[];
}[] = [
  {
    title: "Services",
    links: [
      { label: "Home", navLink: "Home" },
      { label: "Solutions", navLink: "Solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", navLink: "About Us" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Links",
    links: [{ label: "FAQs", navLink: "FAQs" }],
  },
];

export default function Footer() {
  return (
    <div className="border-t border-white/5 bg-[#011B21] px-4 py-10 font-montserrat sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1130px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* brand column */}
          <div className="flex flex-col gap-5">
            <button
              onClick={() => scrollToSection("Home")}
              className="flex w-fit cursor-pointer items-center gap-2"
            >
              <span className="relative flex h-9 w-9.5 items-center justify-center rounded-full bg-white">
                <span className="absolute top-[13px] left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#282525]">
                  <span className="absolute top-[12.5px] left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7E1B]" />
                </span>
              </span>
              <span className="text-lg font-semibold tracking-wide text-white">
                MYBCASH
              </span>
            </button>

            <p className="max-w-sm text-base font-normal text-gray-400 sm:max-w-100 sm:text-xl">
              One wallet, multiple currencies, total control all in one
              place
            </p>

            <div className="max-w-85 gap-1 py-2">
              <DownloadButtons
                iosUrl="YOUR_APP_STORE_URL"
                androidUrl="YOUR_GOOGLE_PLAY_URL"
              />
            </div>

            <div className="flex flex-col gap-2 text-xs text-gray-400 sm:text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                Accra, Ghana
              </span>
              
               <a href="mailto:helpcenter@mybcash.com"
                className="flex items-center gap-2 transition-colors hover:text-orange-400">
                <Mail className="h-4 w-4 shrink-0 text-white/40" />
                helpcenter@mybcash.com
              </a>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h3 className="bg-gradient-to-r from-[#F0D6B4] to-[#EB6CA1] bg-clip-text pb-1 text-sm font-semibold text-transparent">
                  {col.title}
                </h3>
                {col.links.map((link) =>
                  link.navLink ? (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.navLink!)}
                      className="w-fit cursor-pointer text-left text-xs text-gray-400 transition-colors hover:text-white sm:text-sm"
                    >
                      {link.label}
                    </button>
                  ) : (
                    
                     <a key={link.label}
                      href={link.href}
                      className="w-fit text-xs text-gray-400 transition-colors hover:text-white sm:text-sm">
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/5 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-500">
            ©2026 MYBCASH. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}