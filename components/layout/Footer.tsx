import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/content/navigation";
import { offices } from "@/lib/content/offices";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-offwhite">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-warmgray">
              {siteConfig.description}
            </p>
          </div>

          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cognac-light">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      data-cursor="link"
                      className="text-sm text-warmgray transition-colors hover:text-offwhite"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-offwhite/10 pt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cognac-light">Offices</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm text-warmgray sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office) => (
              <li key={office.city}>
                <span className="font-medium text-offwhite">{office.city}</span>
                <span className="block text-xs">
                  {office.country}
                  {office.hq && " · HQ"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-offwhite/10 pt-8 text-xs text-warmgray md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.{" "}
            <span className="text-warmgray/70">[PLACEHOLDER] Registered company details.</span>
          </p>
          <p className="max-w-xl text-warmgray/70">
            [PLACEHOLDER] Regulatory disclosure. Investments carry risk, including loss of capital.
            This site is for information only and is not investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
