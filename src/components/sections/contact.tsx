import { MapPin, Clock, Footprints, Phone, CalendarDays } from "lucide-react"
import { InstagramGlyph } from "@/components/ui/instagram-glyph"
import { contact, salon } from "@/data/site-content"
import { Reveal } from "@/components/ui/reveal"
import { CarteAcces } from "@/components/ui/carte-acces"

const ICONES = [Phone, MapPin, Clock, Footprints]

const champ =
  "w-full border-b border-ink/15 bg-transparent py-3 text-sm text-ink transition-colors placeholder:text-taupe/75 focus:border-rose focus:outline-none"

export function Contact() {
  return (
    <section id="contact" className="bg-marble py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-taupe">{contact.eyebrow}</p>
            <h2 className="text-section mt-5">{contact.titre}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-taupe">{contact.texte}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={salon.telephoneLien}
                className="eyebrow inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-ivory transition-colors hover:bg-ink-soft"
              >
                <Phone className="size-4" strokeWidth={1.5} />
                {salon.telephone}
              </a>
              <a
                href={salon.planity}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
              >
                <CalendarDays className="size-4" strokeWidth={1.5} />
                Réserver sur Planity
              </a>
            </div>

            <dl className="mt-10 space-y-6">
              {contact.acces.map((item, index) => {
                const Icone = ICONES[index] ?? MapPin
                return (
                  <div key={item.label} className="flex gap-4">
                    <Icone className="mt-0.5 size-5 shrink-0 text-rose" strokeWidth={1.5} />
                    <div>
                      <dt className="eyebrow text-taupe">{item.label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink">
                        {"lien" in item && item.lien ? (
                          <a
                            href={item.lien}
                            className="underline decoration-nude underline-offset-4 transition-colors hover:decoration-rose"
                          >
                            {item.valeur}
                          </a>
                        ) : (
                          item.valeur
                        )}
                      </dd>
                    </div>
                  </div>
                )
              })}
              <div className="flex gap-4">
                <InstagramGlyph className="mt-0.5 size-5 shrink-0 text-rose" />
                <div>
                  <dt className="eyebrow text-taupe">Instagram</dt>
                  <dd className="mt-1 text-sm">
                    <a
                      href={salon.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline decoration-nude underline-offset-4 transition-colors hover:decoration-rose"
                    >
                      {salon.instagramHandle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <img
              src={contact.image.src}
              alt={contact.image.alt}
              width={contact.image.width}
              height={contact.image.height}
              loading="lazy"
              decoding="async"
              className="mt-10 aspect-[4/3] w-full object-cover"
            />
            <p className="mt-3 text-xs leading-relaxed text-taupe">
              Le salon se trouve à l'intérieur de la Résidence Floréal — pas de vitrine sur rue.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/merci.html"
              className="bg-ivory p-7 md:p-10"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Ne pas remplir : <input name="bot-field" />
                </label>
              </p>

              <div className="space-y-7">
                <div>
                  <label htmlFor="nom" className="eyebrow text-taupe">
                    Nom et prénom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Camille Durand"
                    className={champ}
                  />
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telephone" className="eyebrow text-taupe">
                      Téléphone
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="06 12 34 56 78"
                      className={champ}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow text-taupe">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="camille@exemple.fr"
                      className={champ}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="prestation" className="eyebrow text-taupe">
                    Prestation souhaitée
                  </label>
                  <select id="prestation" name="prestation" required className={champ}>
                    <option value="">Choisir…</option>
                    {contact.prestationsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow text-taupe">
                    Votre projet capillaire
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Longueur actuelle, couleur souhaitée, disponibilités…"
                    className={`${champ} resize-none`}
                  />
                  <p className="mt-2 text-xs text-taupe">
                    Plus la demande est précise, plus le créneau proposé sera juste.
                  </p>
                </div>

                <button
                  type="submit"
                  className="eyebrow w-full rounded-full bg-ink px-7 py-4 text-ivory transition-colors hover:bg-ink-soft"
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs leading-relaxed text-taupe">
                  Vos coordonnées servent uniquement à vous rappeler pour ce rendez-vous. Elles ne
                  sont ni cédées ni revendues, et sont conservées douze mois au maximum.{" "}
                  <a
                    href="/mentions-legales.html"
                    className="underline decoration-nude underline-offset-4 transition-colors hover:decoration-rose"
                  >
                    Mentions légales
                  </a>
                  .
                </p>
              </div>
            </form>

            <div className="mt-4 overflow-hidden">
              <CarteAcces />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
