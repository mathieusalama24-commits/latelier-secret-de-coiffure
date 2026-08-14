import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { nav, salon } from "@/data/site-content"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import { Wordmark } from "@/components/ui/wordmark"

const SECTION_IDS = nav.map((item) => item.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const boutonRef = useRef<HTMLButtonElement>(null)
  const fermetureRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // empêche le défilement de l'arrière-plan quand le panneau est ouvert, et ferme par Échap
  useEffect(() => {
    if (!open) return

    document.body.style.overflow = "hidden"
    fermetureRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKeyDown)
      // sans cela, la fermeture renvoie le focus tout en haut du document
      boutonRef.current?.focus()
    }
  }, [open])

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ivory/92 shadow-[0_1px_0_rgba(20,16,13,0.08)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-base leading-tight tracking-tight text-ink md:text-lg"
        >
          <Wordmark compact />
        </a>

        {/* Navigation desktop et bouton menu coexistent, comme sur le portfolio */}
        <div className="flex items-center gap-6">
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const isActive = active === item.href.slice(1)
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "eyebrow relative py-1 transition-colors hover:text-ink",
                        isActive ? "text-ink" : "text-taupe",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-rose transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <a
            href={salon.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow hidden rounded-full bg-ink px-5 py-2.5 text-ivory transition-colors hover:bg-ink-soft md:inline-block"
          >
            Rendez-vous
          </a>

          <button
            ref={boutonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="menu-panneau"
            className="flex size-11 items-center justify-center text-ink transition-colors hover:text-rose"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </header>

      {/*
        Panneau plein écran — une seule source de vérité pour les liens, pas de duplication.
        Il vit HORS du <header> : un ancêtre en `position: fixed` portant un `backdrop-filter`
        devient bloc conteneur de ses descendants `fixed`, et le panneau se retrouvait alors
        enfermé dans la bande de 76 px du header.
      */}
      <div
        id="menu-panneau"
        hidden={!open}
        className="fixed inset-0 z-60 flex flex-col bg-ivory px-5 py-4 md:px-10"
      >
        <div className="flex items-center justify-between">
          <Wordmark compact />
          <button
            ref={fermetureRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="flex size-11 items-center justify-center text-ink transition-colors hover:text-rose"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <Wordmark className="mt-10 md:mt-14" />

        <nav aria-label="Navigation" className="flex flex-1 items-center">
          <ul className="w-full max-w-3xl space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-nude/60 py-4 font-display text-3xl text-ink transition-colors hover:text-rose sm:text-4xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-3 pb-6">
          <a
            href={salon.telephoneLien}
            className="eyebrow rounded-full bg-ink px-6 py-3.5 text-ivory transition-colors hover:bg-ink-soft"
          >
            {salon.telephone}
          </a>
          <a
            href={salon.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow rounded-full border border-ink/20 px-6 py-3.5 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
          >
            Réserver en ligne
          </a>
          <a
            href={salon.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow px-2 text-taupe transition-colors hover:text-ink"
          >
            {salon.instagramHandle}
          </a>
        </div>
      </div>
    </>
  )
}
