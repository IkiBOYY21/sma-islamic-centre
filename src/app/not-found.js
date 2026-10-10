import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-20 pt-40 text-center">
      <h1 className="font-display text-7xl leading-none md:text-8xl">Halaman tidak ditemukan</h1>
      <p className="mb-8 mt-5 text-gray-600">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <Button href="/">Kembali ke Home</Button>
    </div>
  );
}
