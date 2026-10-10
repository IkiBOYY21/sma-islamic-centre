import { notFound, redirect } from "next/navigation";
import { nav } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return nav.filter((n) => n.children).map((n) => ({ section: n.label.toLowerCase() }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const group = nav.find((n) => n.children && n.label.toLowerCase() === section);
  if (!group) notFound();
  redirect(group.children![0].href);
}
