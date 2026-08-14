import { Phone, CalendarDays } from "lucide-react"
import { salon } from "@/data/site-content"

/**
 * Barre collante mobile : appeler d'abord, réserver en ligne ensuite.
 * L'appel passe en premier parce que la réservation Planity est désactivée pendant son congé —
 * à rééquilibrer si elle réactive la prise de rendez-vous en ligne.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-ink/10 bg-ivory/95 backdrop-blur-md md:hidden">
      <a
        href={salon.telephoneLien}
        className="eyebrow flex flex-1 items-center justify-center gap-2 bg-ink py-4 text-ivory"
      >
        <Phone className="size-4" strokeWidth={1.5} />
        Appeler le salon
      </a>
      <a
        href={salon.planity}
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow flex items-center justify-center gap-2 px-5 text-ink"
      >
        <CalendarDays className="size-4" strokeWidth={1.5} />
        Réserver
      </a>
    </div>
  )
}
