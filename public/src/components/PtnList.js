export default function PtnList({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="rounded-2xl border border-black/10 bg-white p-6 text-gray-600">
        Belum ada data penerimaan perguruan tinggi yang tersedia.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <article
          key={item.id ?? `${item.nama}-${item.kampus}-${item.prodi}`}
          className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-5 flex items-start justify-between gap-3">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {item.jalur}
            </span>
            <span className="text-right text-xs text-gray-500">
              {item.periode}
            </span>
          </div>
          <h2 className="font-display text-2xl leading-tight text-ink">
            {item.nama || "Nama siswa"}
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-700">
            {item.kampus}
          </p>
          <p className="mt-1 text-sm text-gray-600">{item.prodi}</p>
        </article>
      ))}
    </div>
  );
}
