// Lingkaran coretan tangan yang digambar mengelilingi teks (harus berada di dalam <Reveal>).
export default function Lingkaran({ children }) {
  return (
    <span className="relative inline-block whitespace-nowrap px-1">
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+24px)] text-aksen"
        aria-hidden="true"
      >
        <path
          className="draw"
          pathLength="1"
          d="M24 46C8 22 70 6 122 8C176 10 199 30 186 52C171 74 100 77 55 69C24 63 7 47 21 29"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
