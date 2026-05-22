"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ArcadePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020203] text-[#E5DED3]">

      {/* Darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#040408] to-[#010102]" />

      {/* Cold arcane haze */}
      <div className="absolute top-[8%] left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-[#9CA7C4]/4 blur-[180px]" />

      {/* Dried crimson undertone */}
      <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#4A0812]/10 blur-[180px]" />

      {/* Cathedral vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.94)_100%)]" />

      {/* Arcane pulse */}
<motion.div
  className="fixed inset-0 z-[8] pointer-events-none"
  animate={{
    opacity: [0.018, 0.038, 0.018],
    scale: [1, 1.015, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="absolute top-[18%] left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#9CA7C4]/[0.06] blur-[110px]" />

  <div className="absolute top-[52%] left-[55%] h-[110px] w-[110px] rounded-full bg-[#9CA7C4]/[0.035] blur-[80px]" />
</motion.div>

      <section className="relative z-10 px-8 py-24">

        {/* Return threshold */}
        <div className="max-w-6xl mx-auto mb-14">
          <Link
            href="/"
            className="font-[family-name:var(--font-cinzel)] uppercase tracking-[0.3em] text-sm text-[#8A7355] transition duration-700 hover:text-[#B49A73]"
          >
            ← Return to The Estate
          </Link>
        </div>

        {/* Chamber heading */}
        <div className="max-w-4xl mx-auto text-center mb-24">

          <p className="font-[family-name:var(--font-cinzel)] uppercase tracking-[0.5em] text-[#8A7355] text-sm mb-8">
            ☩ The Crypt of Forgotten Worlds
          </p>

          <h1 className="font-[family-name:var(--font-cinzel)] text-6xl md:text-8xl tracking-[0.18em] leading-[0.95] text-[#ECE5DA] mb-10">
            Arcade
            <br />
            Crypt
          </h1>

          <p className="font-[family-name:var(--font-spectral)] max-w-2xl mx-auto text-[#98A0B0] text-lg md:text-xl leading-relaxed">
            Worlds wandered, obsessions kept, relics remembered,
            and kingdoms once inhabited.
          </p>

        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-20">

          <div className="h-px w-28 md:w-44 bg-gradient-to-r from-transparent via-[#7F6848]/40 to-transparent" />

          <div className="mx-6 text-[#7F6848] text-3xl">
            ☩
          </div>

          <div className="h-px w-28 md:w-44 bg-gradient-to-l from-transparent via-[#7F6848]/40 to-transparent" />

        </div>

        {/* Relics */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            "Forgotten Kingdoms",
            "RPG Relics",
            "Haunted Obsessions",
          ].map((title) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#5C4A34]/25 bg-[#040406]/80 ring-1 ring-inset ring-white/[0.02] transition duration-1000 hover:border-[#9A8260]/50 hover:shadow-[0_0_90px_rgba(74,8,18,0.25)] before:absolute before:top-[-18px] before:left-1/2 before:h-12 before:w-[70%] before:-translate-x-1/2 before:rounded-t-full before:border-t before:border-[#7F6848]/10 before:content-['']"
            >

              {/* Cold arcane glow */}
              <div className="absolute top-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#9CA7C4]/5 blur-[90px] opacity-0 transition duration-1000 group-hover:opacity-100" />

              {/* Crimson undertone */}
              <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#4A0812]/20 to-transparent opacity-0 transition duration-1000 group-hover:opacity-100" />

              {/* Inner frame */}
              <div className="absolute inset-[12px] rounded-[2rem] border border-[#7F6848]/10 pointer-events-none" />

              {/* Depth seam */}
              <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7F6848]/10 to-transparent opacity-20" />

              <div className="relative z-10 p-8">

                <div className="aspect-[3/4] rounded-[2rem] bg-gradient-to-b from-[#101018] via-[#08080C] to-[#030304] flex items-center justify-center overflow-hidden">

                  <span className="text-[#7F6848]/40 text-6xl transition duration-1000 group-hover:text-[#C9B18C]/70 group-hover:scale-105">
                    ☩
                  </span>

                </div>

                <div className="text-center pt-7">

                  <h3 className="font-[family-name:var(--font-cinzel)] text-2xl tracking-[0.12em] text-[#ECE5DA] mb-3 transition duration-1000 group-hover:text-[#F4EFE7]">
                    {title}
                  </h3>

                  <p className="font-[family-name:var(--font-spectral)] text-[#8F97A7] leading-relaxed transition duration-1000 group-hover:text-[#BAC0CC]">
                    Awaiting rediscovery.
                  </p>

                </div>

              </div>

            </div>
          ))}
        </div>

      </section>
    </main>
  );
}