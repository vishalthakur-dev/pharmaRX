import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/assets/pharmalogo.png";

export default function Logo({ href = "/category/vitamins-and-supplements/", className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${className}`}
      aria-label="Pharma RX – home"
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={120}
        height={40}
        className="h-9 w-auto object-contain sm:h-10"
        priority
      />
      <span className="text-xl font-bold tracking-tight text-cyan-800 sm:text-2xl">
        Pharma RX
      </span>
    </Link>
  );
}
