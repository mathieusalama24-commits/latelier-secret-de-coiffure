import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  /** décalage en secondes, pour cascader plusieurs éléments d'une même rangée */
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "article"
}

/**
 * Apparition au scroll : léger fondu + montée. Sous `prefers-reduced-motion`, le contenu
 * s'affiche directement — on ne remplace pas l'animation par une autre animation.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
