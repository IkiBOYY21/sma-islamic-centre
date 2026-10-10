// Memecah teks jadi kata-kata yang naik satu per satu.
// muat=true: animasi langsung saat halaman dibuka. Selain itu: saat berada di dalam <Reveal>.
export default function Kata({ teks, muat = false, tunda = 0 }) {
  const daftar = teks.split(" ");
  return (
    <>
      {daftar.map((k, i) => (
        <span key={i}>
          <span className={muat ? "kata-load" : "kata"} style={{ "--i": i, "--d": `${tunda}ms` }}>
            <span>{k}</span>
          </span>
          {i < daftar.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
