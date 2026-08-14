import { useState } from "react"
import { MapPin, ExternalLink } from "lucide-react"
import { salon } from "@/data/site-content"

/**
 * Carte chargée au clic.
 *
 * L'iframe Google Maps se chargeait dès l'ouverture de la page : Google recevait donc l'adresse
 * IP de chaque visiteuse et déposait ses cookies avant tout consentement, pour 350 ms de réseau
 * dont personne n'a besoin tant qu'on ne cherche pas l'itinéraire. Ici, rien ne part vers Google
 * avant que la visiteuse ne le demande.
 */
export function CarteAcces() {
  const [affichee, setAffichee] = useState(false)

  if (affichee) {
    return (
      <iframe
        src={salon.mapsEmbed}
        title={`Plan d'accès — ${salon.nom}, ${salon.adresse} à ${salon.ville}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-72 w-full border-0 grayscale-[0.35]"
      />
    )
  }

  return (
    <div className="flex h-72 flex-col items-center justify-center gap-4 border border-ink/10 bg-ivory px-6 text-center">
      <MapPin className="size-6 text-rose" strokeWidth={1.5} />
      <p className="text-sm leading-relaxed text-taupe">
        {salon.adresse} — {salon.complementAdresse}
        <span className="block">
          {salon.codePostal} {salon.ville}
        </span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setAffichee(true)}
          className="eyebrow rounded-full border border-ink/20 px-5 py-3 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
        >
          Afficher la carte
        </button>
        <a
          href={salon.mapsLien}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow inline-flex items-center gap-1.5 text-taupe transition-colors hover:text-ink"
        >
          Itinéraire
          <ExternalLink className="size-3.5" strokeWidth={1.5} />
        </a>
      </div>

      <p className="text-xs text-taupe/75">
        La carte est fournie par Google : elle ne se charge qu'à votre demande.
      </p>
    </div>
  )
}
