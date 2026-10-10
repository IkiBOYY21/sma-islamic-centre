import { ArrowIcon } from "@/components/Button";

// Lencana teks melingkar yang berputar pelan.
export default function RotatingBadge({ href, teks = "DAFTAR SPMB • DAFTAR SPMB • DAFTAR SPMB • ", className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Daftar SPMB"
      data-cursor="Daftar"
      className={`group relative grid h-28 w-28 place-items-center rounded-full bg-white text-ink shadow-xl shadow-black/15 transition-transform duration-500 hover:scale-110 md:h-36 md:w-36 ${className}`}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="lingkar" d="M100 100m-76 0a76 76 0 1 1 152 0a76 76 0 1 1 -152 0" />
        </defs>
        <text fontSize="15" fontWeight="700" fill="currentColor" textLength="470" lengthAdjust="spacing">
          <textPath href="#lingkar">{teks}</textPath>
        </text>
      </svg>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-900 text-white transition-transform duration-500 group-hover:-rotate-45 md:h-14 md:w-14">
        <ArrowIcon className="h-5 w-5" />
      </span>
    </a>
  );
}
