import { cn } from "@/lib/utils"

/**
 * Mot-symbole recomposé d'après sa carte tarifaire : « L'atelier » et « Secret » en serif à fort
 * contraste, « COIFFURE MAQUILLAGE » en capitales espacées glissées entre les deux lignes.
 * Bodoni Moda tient ce rôle en attendant son fichier d'origine.
 *
 * `compact` : version en ligne pour la barre de navigation, où le bloc empilé serait illisible.
 */
export function Wordmark({
  compact = false,
  className,
}: {
  compact?: boolean
  className?: string
}) {
  if (compact) {
    return (
      <span className={cn("block leading-none", className)}>
        <span className="font-display text-base tracking-tight md:text-lg">L'Atelier Secret</span>
        <span className="mt-1 block text-[0.55rem] tracking-[0.28em] text-taupe uppercase">
          Coiffure · Maquillage
        </span>
      </span>
    )
  }

  // largeur au contenu : sans cela, le retrait en pourcentage de la suréteiquette se calcule
  // sur toute la largeur du parent et l'envoie à l'autre bout de l'écran
  return (
    <span className={cn("inline-block w-fit", className)}>
      <span className="font-display block text-4xl leading-[0.85] tracking-tight text-rose sm:text-5xl">
        L'atelier
      </span>
      <span className="mt-2 block pl-[42%] text-[0.6rem] tracking-[0.3em] whitespace-nowrap text-taupe uppercase sm:text-[0.7rem]">
        Coiffure Maquillage
      </span>
      <span className="font-display -mt-1 block text-4xl leading-[0.85] tracking-tight text-rose sm:text-5xl">
        Secret
      </span>
    </span>
  )
}
