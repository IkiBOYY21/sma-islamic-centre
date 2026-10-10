import Sparkle from "@/components/Sparkle";

/**
 * Heading halaman yang mendukung dua pola properti lama:
 * label/judul/deskripsi dan section/title/description.
 */
export default function PageHeader({
  label,
  judul,
  deskripsi,
  section,
  title,
  description,
}) {
  const labelText = label ?? section;
  const titleText = judul ?? title;
  const descriptionText = deskripsi ?? description;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-32 md:pt-40">
      {labelText && (
        <p className="animate-fade-up text-xs font-semibold text-aksen">
          {labelText}
        </p>
      )}
      <h1
        className="mt-2 flex animate-fade-up items-start gap-2 font-display text-6xl leading-[0.95] md:text-8xl"
        style={{ animationDelay: "120ms" }}
      >
        {titleText}
        <Sparkle className="mt-2 hidden h-10 w-10 text-aksen md:block" />
      </h1>
      {descriptionText && (
        <p
          className="mt-5 max-w-xl animate-fade-up text-gray-600"
          style={{ animationDelay: "240ms" }}
        >
          {descriptionText}
        </p>
      )}
    </div>
  );
}
