// Bintang kecil berkedip, seperti pada judul di desain referensi.
export default function Sparkle({ className = "h-8 w-8", delay = 0 }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      className={`animate-twinkle ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden="true"
    >
      <path d="M20 3C21.5 13 27 18.5 37 20C27 21.5 21.5 27 20 37C18.5 27 13 21.5 3 20C13 18.5 18.5 13 20 3Z" />
    </svg>
  );
}
