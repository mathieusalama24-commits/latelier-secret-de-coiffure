import { banniere } from "@/data/site-content"

/**
 * Bandeau d'information, rendu uniquement si `banniere.actif` est vrai dans site-content.
 * Sert à annoncer une fermeture temporaire : sans lui, le site invite à réserver un créneau
 * que personne ne peut honorer.
 */
export function Banniere() {
  if (!banniere.actif) return null

  return (
    <p
      role="status"
      className="eyebrow relative z-70 bg-ink px-5 py-3 text-center leading-relaxed text-nude md:px-10"
    >
      {banniere.texte}
    </p>
  )
}
