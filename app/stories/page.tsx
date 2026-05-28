
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StoriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020203] text-[#E5DED3]">

      {/* Darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#050509] to-[#010102]" />

      {/* Candlelit haze */}
      <div className="absolute top-[10%] left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[#A89272]/5 blur-[180px]" />

      {/* Dried crimson undertone */}
      <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#4A0812]/10 blur-[180px]" />

      {/* Cathedral vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.94)_100%)]" />

{/* Candle breath */}
<motion.div
  className="fixed inset-0 z-[8] pointer-events-none"
  animate={{
    opacity: [0.015, 0.032, 0.015],
    scale: [1, 1.012, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="absolute top-[18%] left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#A89272]/[0.06] blur-[100px]" />

  <div className="absolute top-[48%] left-[46%] h-[120px] w-[120px] rounded-full bg-[#A89272]/[0.03] blur-[80px]" />
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
            ✒ The Sanctum of Forgotten Things
          </p>

          <h1 className="font-[family-name:var(--font-cinzel)] text-6xl md:text-8xl tracking-[0.18em] leading-[0.95] text-[#ECE5DA] mb-10">
            House of
            <br />
            Stories
          </h1>

          <p className="font-[family-name:var(--font-spectral)] max-w-2xl mx-auto text-[#98A0B0] text-lg md:text-xl leading-relaxed">
          Some things are written to be remembered. Others are written because forgetting becomes impossible. 
Stories, quiet horrors, fragments, and things preserved against silence.
          </p>

        </div>

        <div className="max-w-2xl mx-auto mt-20 mb-10 text-left">
  <p className="font-[family-name:var(--font-cinzel)] uppercase tracking-[0.35em] text-[#A89272] text-xs mb-3">
    Recovered Entries
  </p>

  <div className="h-px w-24 bg-gradient-to-r from-[#7F6848]/40 to-transparent" />
</div>        
        
        <Link
  href="/stories/a-thing-remembered-imperfectly"
  className="group block max-w-2xl mx-auto mt-16 border border-[#7F6848]/10 rounded-[1.5rem] bg-black/20 p-8 transition duration-700 hover:border-[#A89272]/25 hover:bg-white/[0.02]"
>
  <p className="text-[#A89272] uppercase tracking-[0.3em] text-xs mb-4">
    November 12
  </p>

  <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-[#ECE5DA] mb-4">
    A Thing Remembered Imperfectly
  </h2>

  <p className="font-[family-name:var(--font-spectral)] text-[#BFB8AD] italic leading-8 group-hover:text-[#D8D1C6] transition">
    Memory is dishonest. It smooths edges, rearranges weather,
    and leaves behind feelings sharper than facts.
  </p>
</Link> 

<Link
  href="#"
  className="group block max-w-2xl mx-auto mt-4 border border-[#7F6848]/10 rounded-[1.5rem] bg-black/20 p-8 transition duration-700 hover:border-[#A89272]/20 hover:bg-white/[0.02]"
>
  <p className="text-[#A89272] uppercase tracking-[0.3em] text-xs mb-4">
    October 28
  </p>

  <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-[#ECE5DA] mb-4">
    The Road Behind the Church
  </h2>

  <p className="font-[family-name:var(--font-spectral)] text-[#BFB8AD] italic leading-8 opacity-80 group-hover:opacity-100 transition">
    I still dream of a road that no longer exists.
  </p>
</Link>

<Link
  href="#"
  className="group block max-w-2xl mx-auto mt-4 border border-[#7F6848]/10 rounded-[1.5rem] bg-black/20 p-8 transition duration-700 hover:border-[#A89272]/20 hover:bg-white/[0.02]"
>
  <p className="text-[#A89272] uppercase tracking-[0.3em] text-xs mb-4">
    Undated
  </p>

  <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-[#ECE5DA] mb-4">
    Candle Room Notes
  </h2>

  <p className="font-[family-name:var(--font-spectral)] text-[#BFB8AD] italic leading-8 opacity-80 group-hover:opacity-100 transition">
    Some nights writing feels less like creation and more like excavation.
  </p>
</Link>

        {/* Divider */}
        <div className="flex items-center justify-center mb-20">

          <div className="h-px w-28 md:w-44 bg-gradient-to-r from-transparent via-[#7F6848]/40 to-transparent" />

          <div className="mx-6 text-[#7F6848] text-3xl">
            ✒
          </div>

          <div className="h-px w-28 md:w-44 bg-gradient-to-l from-transparent via-[#7F6848]/40 to-transparent" />

        </div>

        {/* Written relics */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            "The Last Candle",
            "Fragments of Memory",
            "Stories Never Buried",
          ].map((title) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#5C4A34]/25 bg-[#040406]/80 ring-1 ring-inset ring-white/[0.02] transition duration-1000 hover:border-[#9A8260]/50 hover:shadow-[0_0_90px_rgba(74,8,18,0.25)] before:absolute before:top-[-18px] before:left-1/2 before:h-12 before:w-[70%] before:-translate-x-1/2 before:rounded-t-full before:border-t before:border-[#7F6848]/10 before:content-['']"
            >

              {/* Candle glow */}
              <div className="absolute top-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#A89272]/6 blur-[90px] opacity-0 transition duration-1000 group-hover:opacity-100" />

              {/* Crimson undertone */}
              <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#4A0812]/20 to-transparent opacity-0 transition duration-1000 group-hover:opacity-100" />

              {/* Inner frame */}
              <div className="absolute inset-[12px] rounded-[1.5rem] border border-[#7F6848]/10 pointer-events-none" />

              {/* Depth seam */}
              <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7F6848]/10 to-transparent opacity-20" />

              <div className="relative z-10 p-8">

                <div className="aspect-[3/4] rounded-[1.5rem] bg-gradient-to-b from-[#111118] via-[#09090D] to-[#030304] flex items-center justify-center overflow-hidden">

                  <span className="text-[#7F6848]/40 text-6xl transition duration-1000 group-hover:text-[#C9B18C]/70 group-hover:scale-105">
                    ✒
                  </span>

                </div>

                <div className="text-center pt-7">

                  <h3 className="font-[family-name:var(--font-cinzel)] text-2xl tracking-[0.12em] text-[#ECE5DA] mb-3 transition duration-1000 group-hover:text-[#F4EFE7]">
                    {title}
                  </h3>

                  <p className="font-[family-name:var(--font-spectral)] text-[#8F97A7] leading-relaxed transition duration-1000 group-hover:text-[#BAC0CC]">
                    Awaiting remembrance.
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