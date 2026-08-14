import { useEffect, useState } from "react"

/**
 * Renvoie l'id de la section actuellement à l'écran, pour surligner le lien de navbar
 * correspondant. Un seul IntersectionObserver pour toutes les sections.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      // la bande centrale de l'écran décide de la section active
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [ids])

  return active
}
