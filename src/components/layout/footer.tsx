import { InstagramGlyph } from "@/components/ui/instagram-glyph"
import { nav, salon } from "@/data/site-content"
import { Wordmark } from "@/components/ui/wordmark"

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-28 text-ivory md:pb-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark className="[&_.text-rose]:text-rose-light [&_.text-taupe]:text-nude/85" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-nude/80">
              Salon 100 % féminin et sans vis-à-vis, à six minutes à pied de la gare d'Argenteuil.
            </p>
          </div>

          <nav aria-label="Pied de page">
            <p className="eyebrow text-gold">Le site</p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-nude/80 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold">Le salon</p>
            <address className="mt-5 text-sm leading-relaxed text-nude/80 not-italic">
              {salon.adresse}
              <br />
              {salon.complementAdresse}
              <br />
              {salon.codePostal} {salon.ville}
            </address>
            <a
              href={salon.telephoneLien}
              className="mt-5 block font-display text-xl text-ivory transition-colors hover:text-gold"
            >
              {salon.telephone}
            </a>
            <a
              href={salon.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-nude/80 transition-colors hover:text-ivory"
            >
              <InstagramGlyph className="size-4" />
              {salon.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/12 pt-7 text-xs text-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} L'Atelier Secret de Coiffure — Argenteuil ·{" "}
            <a
              href="/mentions-legales.html"
              className="underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory hover:decoration-gold"
            >
              Mentions légales
            </a>
          </p>
          <p>
            Note et avis relevés sur Planity. Photographies : L'Atelier Secret de Coiffure.
          </p>
        </div>
      </div>
    </footer>
  )
}
