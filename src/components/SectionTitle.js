export default function SectionTitle({ children, deskripsi }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{children}</h2>
      {deskripsi && <p className="mt-2 max-w-xl text-sm text-gray-600">{deskripsi}</p>}
    </div>
  );
}
