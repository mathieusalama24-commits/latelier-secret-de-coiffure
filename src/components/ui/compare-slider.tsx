import { useCallback, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Comparateur avant / après.
 *
 * Adapté du composant « Compare Slider » de diceui sur 21st.dev, réduit à ce dont ce site a
 * besoin : une seule orientation, pas de Slot Radix, pas de store externe. Ce qui est conservé
 * de l'original, c'est l'essentiel — la sémantique `role="slider"` et le pilotage clavier
 * (flèches, Maj+flèches, Origine/Fin), sans lesquels le composant serait inutilisable ailleurs
 * qu'à la souris.
 */

const PAGE_KEYS = ["PageUp", "PageDown"]
const ARROW_KEYS = ["ArrowLeft", "ArrowRight"]

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

interface Visuel {
  src: string
  alt: string
  width: number
  height: number
}

interface CompareSliderProps {
  avant: Visuel
  apres: Visuel
  labelAvant?: string
  labelApres?: string
  className?: string
}

export function CompareSlider({
  avant,
  apres,
  labelAvant = "Avant",
  labelApres = "Après",
  className,
}: CompareSliderProps) {
  const [value, setValue] = useState(50)
  const rootRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromPointer = useCallback((clientX: number) => {
    const root = rootRef.current
    if (!root) return
    const rect = root.getBoundingClientRect()
    setValue(clamp(((clientX - rect.left) / rect.width) * 100, 0, 100))
  }, [])

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Home") {
      event.preventDefault()
      setValue(0)
      return
    }
    if (event.key === "End") {
      event.preventDefault()
      setValue(100)
      return
    }
    if (!PAGE_KEYS.includes(event.key) && !ARROW_KEYS.includes(event.key)) return

    event.preventDefault()
    const isSkip = PAGE_KEYS.includes(event.key) || event.shiftKey
    const direction = event.key === "ArrowLeft" || event.key === "PageUp" ? -1 : 1
    setValue((current) => clamp(current + direction * (isSkip ? 10 : 2), 0, 100))
  }, [])

  return (
    <div
      ref={rootRef}
      role="slider"
      tabIndex={0}
      aria-label="Comparer l'avant et l'après"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
      aria-valuetext={`${Math.round(value)} % de la photo « avant » visible`}
      className={cn(
        "relative isolate touch-none select-none overflow-hidden bg-marble",
        "cursor-ew-resize outline-none",
        className,
      )}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId)
        draggingRef.current = true
        updateFromPointer(event.clientX)
      }}
      onPointerMove={(event) => {
        if (!draggingRef.current) return
        updateFromPointer(event.clientX)
      }}
      onPointerUp={(event) => {
        event.currentTarget.releasePointerCapture(event.pointerId)
        draggingRef.current = false
      }}
      onPointerCancel={() => {
        draggingRef.current = false
      }}
      onKeyDown={onKeyDown}
    >
      <img
        src={avant.src}
        alt={avant.alt}
        width={avant.width}
        height={avant.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      />
      <img
        src={apres.src}
        alt={apres.alt}
        width={apres.width}
        height={apres.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${value}%)` }}
      />

      <span className="eyebrow absolute top-4 left-4 z-20 bg-ivory/85 px-3 py-1.5 text-ink backdrop-blur-sm">
        {labelAvant}
      </span>
      <span className="eyebrow absolute top-4 right-4 z-20 bg-ink/80 px-3 py-1.5 text-ivory backdrop-blur-sm">
        {labelApres}
      </span>

      <div
        aria-hidden="true"
        className="absolute top-0 z-30 flex h-full w-12 -translate-x-1/2 items-center justify-center"
        style={{ left: `${value}%` }}
      >
        <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-ivory/90" />
        <div className="flex size-11 items-center justify-center rounded-full bg-ivory text-ink shadow-[0_8px_30px_rgba(20,16,13,0.25)]">
          <ChevronLeft className="size-4" strokeWidth={1.5} />
          <ChevronRight className="size-4" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
