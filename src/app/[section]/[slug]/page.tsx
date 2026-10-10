import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { nav } from "@/lib/site";

export const dynamicParams = false;

function find(section: string, slug: string) {
  const href = `/${section}/${slug}`;
  for (const group of nav) {
    const item = group.children?.find((c) => c.href === href);
    if (item) return { group, item };
  }
  return null;
}

export function generateStaticParams() {
  return nav.flatMap((g) =>
    (g.children ?? []).map((c) => {
      const [, section, slug] = c.href.split("/");
      return { section, slug };
    })
  );
}

type Props = { params: Promise<{ section: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params;
  const found = find(section, slug);
  return { title: found?.item.label ?? "Halaman" };
}

export default async function PlaceholderPage({ params }: Props) {
  const { section, slug } = await params;
  const found = find(section, slug);
  if (!found) notFound();

  return (
    <>
      <PageHeader label={found.group.label} judul={found.item.label} deskripsi={found.item.desc} />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-dashed border-brand-500/40 bg-white p-8">
          <h2 className="font-serif text-xl font-semibold">Halaman ini masih kerangka</h2>
          <p className="mt-2 text-ink/70">
            Isi konten &quot;{found.item.label}&quot; belum dibuat. Untuk membuat halaman khusus,
            buat file <code className="rounded bg-brand-50 px-1">src/app{found.item.href}/page.tsx</code>.
            File itu otomatis menggantikan halaman sementara ini.
          </p>
        </div>
      </div>
    </>
  );
}
