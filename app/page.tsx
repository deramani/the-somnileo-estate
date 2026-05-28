"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020203] text-[#E5DED3]">

      {/* Estate Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          src="/images/estate-v2-hero.webp"
          alt="The Estate"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Heavy darkness veil */}
      <div className="fixed inset-0 z-[1] bg-black/45" />

      {/* Cold moon haze */}
      <div className="fixed top-[4%] left-1/2 z-[2] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#BAC0CC]/5 blur-[180px]" />

      {/* Dried blood undertone */}
      <div className="fixed bottom-[-180px] left-1/2 z-[2] h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-[#4A0812]/12 blur-[180px]" />

      {/* Cathedral vignette */}
      <div className="fixed inset-0 z-[3] bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.93)_100%)]" />

{/* Test fog */}
<motion.div
  className="fixed inset-0 z-[8] pointer-events-none"
  animate={{
    x: [0, 35, -18, 0],
    y: [0, -10, 8, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="absolute top-[15%] left-[10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-[140px]" />

  <div className="absolute top-[50%] left-[40%] h-[420px] w-[420px] rounded-full bg-[#BAC0CC]/12 blur-[120px]" />

  <div className="absolute bottom-[8%] right-[10%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[140px]" />
</motion.div>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-start justify-center px-8 pt-24 text-center">

        <div className="max-w-4xl">

        <p className="font-[family-name:var(--font-cinzel)] uppercase tracking-[0.6em] text-[#9A8260] text-sm mb-8">
            The Somnileo Estate
          </p>

          <h1 className="font-[family-name:var(--font-cinzel)] text-6xl md:text-8xl tracking-[0.22em] leading-[0.9] text-[#ECE5DA] mb-10 drop-shadow-[0_0_45px_rgba(186,192,204,0.08)]">
            ENTER
            <br />
            THE GATES
          </h1>

          <p className="font-[family-name:var(--font-spectral)] max-w-2xl mx-auto text-[#9EA6B6] text-lg md:text-xl leading-relaxed mb-20">
            Enter the chambers of Jericho Johnson —
            horror, art, stories, forgotten roads,
            and strange worlds.
          </p>

          <button
  onClick={() => {
    const button = document.getElementById("gate-button");
    button?.classList.add("scale-[0.98]");

    setTimeout(() => {
      button?.classList.remove("scale-[0.98]");
      document
        .getElementById("thresholds")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 180);
  }}
  id="gate-button"
  className="font-[family-name:var(--font-cinzel)] border border-[#7F6848]/40 bg-black/30 px-12 py-5 uppercase tracking-[0.42em] text-sm transition duration-1000 hover:border-[#B49A73] hover:bg-[#13070B] hover:shadow-[0_0_70px_rgba(74,8,18,0.3)] active:scale-[0.98]"
>
  ENTER THE GATES
</button>

        </div>

      </section>

{/* Sealed Doors */}
<section
  id="thresholds"
  className="relative z-10 px-8 pb-28"
>

{/* Divider */}
<div className="flex items-center justify-center mb-16">

  <div className="h-px w-24 md:w-40 bg-gradient-to-r from-transparent via-[#7F6848]/50 to-transparent" />

  <div className="mx-6 text-[#7F6848] text-2xl">
    ✥
  </div>

  <div className="h-px w-24 md:w-40 bg-gradient-to-l from-transparent via-[#7F6848]/50 to-transparent" />

</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-10">

  {[
  {
    sigil: "✥",
    title: "Gallery of Visions",
    href: "/gallery",
    description:
      "Paintings, strange imaginings, shadowed beauty, and fragments of dream.",
  },
  {
    sigil: "☩",
    title: "Arcade Crypt",
    href: "/arcade",
    description:
      "Forgotten worlds, roleplaying relics, obsessions, and haunted games.",
  },
  {
    sigil: "✒",
    title: "House of Stories",
    href: "/stories",
    description:
      "Horror, fiction, essays, journals, and things remembered imperfectly.",
  },
].map((door) => (
  <Link
    key={door.href}
    href={door.href}
    className="block"
  >
  <div
        className="group relative overflow-hidden rounded-[2.5rem] border border-[#5C4A34]/30 bg-[#040406]/75 ring-1 ring-inset ring-white/[0.02] backdrop-blur-sm pt-6 transition duration-1000 hover:border-[#9A8260]/50 hover:bg-[#09090C]/70 hover:shadow-[0_0_90px_rgba(74,8,18,0.25)]
        before:absolute
        before:top-[-18px]
        before:left-1/2
        before:h-12
        before:w-[70%]
        before:-translate-x-1/2
        before:rounded-t-full
        before:border-t
        before:border-[#7F6848]/10
        before:content-['']"
      >
        {/* Cold moonlight */}
        <div className="absolute top-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#BAC0CC]/5 blur-[80px] opacity-0 transition duration-1000 group-hover:opacity-100" />

        {/* Crimson undertone */}
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#4A0812]/25 to-transparent opacity-0 transition duration-1000 group-hover:opacity-100" />

        {/* Inner carved frame */}
        <div className="absolute inset-[12px] rounded-[1.6rem] border border-[#7F6848]/10 pointer-events-none" />

        {/* Central seam */}
        <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7F6848]/10 to-transparent opacity-25 transition duration-1000 group-hover:opacity-45" />

        <div className="relative z-10 p-10 text-center min-h-[520px] flex flex-col justify-center">
          <div className="mb-6 text-[#9A8260] text-6xl transition duration-1000 group-hover:scale-105 group-hover:text-[#C9B18C]">
            {door.sigil}
          </div>

          <h3 className="font-[family-name:var(--font-cinzel)] text-3xl text-[#ECE5DA] tracking-[0.12em] mb-5 transition duration-1000 group-hover:tracking-[0.14em] group-hover:text-[#F3EEE6]">
            {door.title}
          </h3>

          <p className="font-[family-name:var(--font-spectral)] text-[#8F97A7] leading-relaxed transition duration-1000 group-hover:text-[#BAC0CC]">
            {door.description}
          </p>
          </div>
      </div>
      </Link>
))}
</div>
</section>

</main>
);
}
