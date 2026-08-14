import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"
import { hero, signatures } from "@/data/site-content"

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            className="eyebrow text-taupe"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="text-display mt-6"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.titre[0]}
            <span className="block italic text-rose">{hero.titre[1]}</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-taupe md:text-lg"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={hero.ctaPrincipal.href}
              className="eyebrow rounded-full bg-ink px-7 py-4 text-ivory transition-colors hover:bg-ink-soft"
            >
              {hero.ctaPrincipal.label}
            </a>
            <a
              href={hero.ctaSecondaire.href}
              className="eyebrow rounded-full border border-ink/20 px-7 py-4 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {hero.ctaSecondaire.label}
            </a>
          </motion.div>

          <motion.dl
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-nude pt-7"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {signatures.map((item) => (
              <div key={item.detail}>
                <dt className="font-display text-2xl text-ink md:text-3xl">{item.valeur}</dt>
                <dd className="mt-1 text-xs leading-snug text-taupe">{item.detail}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            fetchPriority="high"
            decoding="async"
            className="h-[62vh] max-h-[860px] min-h-[420px] w-full object-cover md:h-[76vh]"
          />

          {/* carte flottante : la note, sourcée */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 bg-ivory px-5 py-4 shadow-[0_18px_50px_rgba(20,16,13,0.14)] md:-left-8">
            <Star className="size-5 shrink-0 fill-rose text-rose" strokeWidth={1} />
            <p className="text-sm leading-tight text-ink">
              <span className="font-display text-lg">{hero.note.valeur}</span>
              <span className="text-taupe">/{hero.note.base}</span>
              <span className="mt-0.5 block text-xs text-taupe">
                {hero.note.nombre} avis {hero.note.source}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
