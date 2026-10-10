import Link from "next/link";

export function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const gaya = {
  dark: "bg-brand-900 text-white hover:bg-brand-700",
  aksen: "bg-aksen text-white hover:bg-brand-700",
  light: "bg-white text-ink shadow-lg shadow-black/10 hover:bg-gold-400",
  outline: "border border-current hover:bg-white hover:text-ink",
};

export default function Button({ href, children, variant = "dark", external = false, arrow = true, size = "md", penuh = false }) {
  const ukuran = size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm";
  const bentuk = penuh ? "w-full justify-between rounded-xl" : "rounded-full";
  const kelas = `group inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${ukuran} ${bentuk} ${gaya[variant]}`;

  const isi = (
    <>
      <span>{children}</span>
      {arrow && <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={kelas}>
        {isi}
      </a>
    );
  }
  return (
    <Link href={href} className={kelas}>
      {isi}
    </Link>
  );
}
