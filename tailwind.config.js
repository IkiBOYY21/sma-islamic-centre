/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF4F1",
          100: "#D5E4DD",
          500: "#2F6D5A",
          700: "#214E41",
          900: "#12302A",
        },
        // Warna aksen (label, chip aktif, tombol, harga). Ganti satu baris ini
        // kalau mau aksen biru seperti referensi, misalnya "#4C7CF3".
        aksen: "#2F6D5A",
        gold: { 400: "#D9AE5F", 500: "#C8963E" },
        langit: { atas: "#3B6FE6", tengah: "#5E8FF2", bawah: "#AFC8FA" },
        surface: "#F7F6F2",
        ink: "#111815",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "none" } },
        draw: { from: { strokeDashoffset: "1" }, to: { strokeDashoffset: "0" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-9px)" } },
        drift: { from: { transform: "translateX(-30vw)" }, to: { transform: "translateX(125vw)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        twinkle: {
          "0%,100%": { opacity: "0.35", transform: "scale(0.8) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.1) rotate(14deg)" },
        },
        pop: { from: { transform: "scale(0)" }, to: { transform: "scale(1)" } },
      },
      animation: {
        "fade-up": "fadeUp 1s cubic-bezier(.2,.7,.2,1) both",
        draw: "draw 3s cubic-bezier(.5,0,.2,1) .5s both",
        float: "float 4s ease-in-out infinite",
        drift: "drift 80s linear infinite",
        marquee: "marquee 45s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        pop: "pop .7s cubic-bezier(.3,1.7,.5,1) both",
        "spin-slow": "spin 18s linear infinite",
      },
    },
  },
  plugins: [],
};
