import Sparkle from "@/components/Sparkle";

export default function PageHeading({ label, judul, deskripsi }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32 md:pt-40">
      {label && <p className="animate-fade-up text-xs font-semibold text-aksen">{label}</p>}
      <h1 className="mt-2 flex animate-fade-up items-start gap-2 font-display text-6xl leading-[0.95] md:text-8xl" style={{ animationDelay: "120ms" }}>
        {judul}
        <Sparkle className="mt-2 hidden h-10 w-10 text-aksen md:block" />
      </h1>
      {deskripsi && (
        <p className="mt-5 max-w-xl animate-fade-up text-gray-600" style={{ animationDelay: "240ms" }}>
          {deskripsi}
        </p>
      )}
    </div>
  );
}
