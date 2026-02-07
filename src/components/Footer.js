import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass =
    "text-sm text-zinc-600 hover:text-cyan-600 focus:underline focus:outline-none";

  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
    { href: "https://instagram.com", label: "Instagram", Icon: FaInstagram },
    { href: "https://twitter.com", label: "Twitter", Icon: FaTwitter },
    { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
    { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  ];

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <nav aria-label="Know us">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Know us
            </h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className={linkClass}>About us</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact us</Link></li>
              <li><Link href="/press" className={linkClass}>Press coverage</Link></li>
              <li><Link href="/careers" className={linkClass}>Careers</Link></li>
              <li><Link href="/partnership" className={linkClass}>Business partnership</Link></li>
              <li><Link href="/health-partner" className={linkClass}>Become a health partner</Link></li>
              <li><Link href="/governance" className={linkClass}>Corporate governance</Link></li>
            </ul>
          </nav>

          <nav aria-label="Our policies">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Our policies
            </h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className={linkClass}>Privacy policy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms and conditions</Link></li>
              <li><Link href="/editorial" className={linkClass}>Editorial policy</Link></li>
              <li><Link href="/return-policy" className={linkClass}>Return policy</Link></li>
              <li><Link href="/ip-policy" className={linkClass}>IP policy</Link></li>
              <li><Link href="/grievance" className={linkClass}>Grievance redressal policy</Link></li>
              <li><Link href="/fraud-disclaimer" className={linkClass}>Fake jobs and fraud disclaimer</Link></li>
            </ul>
          </nav>

          <nav aria-label="Our services">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Our services
            </h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/category/vitamins-and-supplements/" className={linkClass}>Order medicines</Link></li>
              <li><Link href="/lab-tests" className={linkClass}>Book lab tests</Link></li>
              <li><Link href="/consult-doctor" className={linkClass}>Consult a doctor</Link></li>
              <li><Link href="/blogs" className={linkClass}>Health articles</Link></li>
              <li><Link href="/care-plan" className={linkClass}>Care plan</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Connect
            </h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 hover:bg-cyan-100 hover:text-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-600">Want daily dose of health?</p>
            <Link href="/newsletter" className="mt-2 inline-block rounded bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Sign up</Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-zinc-200 pt-10 sm:grid-cols-3">
          <section>
            <h3 className="text-base font-semibold text-zinc-900">Reliable</h3>
            <p className="mt-2 text-sm text-zinc-600">
              All products displayed on Pharma RX are procured from verified and licensed pharmacies. We ensure quality and authenticity.
            </p>
          </section>
          <section>
            <h3 className="text-base font-semibold text-zinc-900">Secure</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Pharma RX uses Secure Sockets Layer (SSL) encryption and follows industry standards for secure payments and data protection.
            </p>
          </section>
          <section>
            <h3 className="text-base font-semibold text-zinc-900">Affordable</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Find great deals on vitamins and supplements. Save on health products with competitive pricing and regular offers.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-8 text-center">
          <p className="text-sm text-zinc-600">
            Trusted online healthcare platform. Compliant with applicable regulations.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:flex-wrap sm:justify-between">
          <div className="order-2 flex-1 text-center sm:order-1 sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
              <Link href="/about" className="text-sm text-cyan-600 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500">Know more about Pharma RX</Link>
              <Link href="/sitemap.xml" className="text-sm text-cyan-600 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500">Sitemap</Link>
            </div>
            <p className="mt-2 max-w-3xl text-xs text-zinc-500">
              © {currentYear} Pharma RX. All rights reserved. All medicines are dispensed in compliance with applicable drugs and cosmetics regulations. We do not process requests for Schedule X and habit-forming drugs.
            </p>
          </div>
          <div className="order-1 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500 sm:order-2">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>RuPay</span>
            <span>Net banking</span>
            <span>Cash on delivery</span>
          </div>
          <div className="order-3">
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
