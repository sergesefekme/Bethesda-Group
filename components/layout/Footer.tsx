import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/content/navigation";
import { contactEmails, contactPhone, hasPrimaryOffice, primaryOffice } from "@/lib/content/offices";
import { SocialIcons } from "@/components/ui/SocialIcons";
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
            <SocialIcons className="mt-7 flex items-center gap-3" />
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

        {hasPrimaryOffice && (
          <div className="mt-14 border-t border-offwhite/10 pt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cognac-light">Office</h3>
            <address className="mt-5 text-sm not-italic text-warmgray">
              <span className="font-medium text-offwhite">
                {primaryOffice.city}
                {primaryOffice.region && `, ${primaryOffice.region}`}
              </span>
              {primaryOffice.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">{primaryOffice.country}</span>
              <a
                href={`mailto:${contactEmails.general}`}
                data-cursor="link"
                className="mt-3 inline-block transition-colors hover:text-offwhite"
              >
                {contactEmails.general}
              </a>
              <a
                href={contactPhone.href}
                data-cursor="link"
                className="block transition-colors hover:text-offwhite"
              >
                {contactPhone.label}
              </a>
            </address>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-4 border-t border-offwhite/10 pt-8 text-xs text-warmgray md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-warmgray/70">
            Investments carry risk, including the loss of capital. Past performance is not a
            reliable indicator of future results. This site is for information only and does not
            constitute investment advice, an offer to sell, or a solicitation to buy any security.
          </p>
        </div>
      </div>
    </footer>
  );
}
