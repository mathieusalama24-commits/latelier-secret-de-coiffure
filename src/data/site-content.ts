/**
 * Contenu éditorial — L'Atelier Secret de Coiffure
 *
 * Toutes les données proviennent de sources vérifiées le 14/08/2026 et consignées dans
 * `../../../donnees-verifiees.md`. Rien n'est inventé.
 *
 *  - Prestations et tarifs : sa carte tarifaire officielle (fournie par Mathieu le 14/08/2026),
 *    qui fait foi. Les durées viennent de son ancien système de réservation (archive du
 *    22/02/2025) : elles n'apparaissent pas sur la carte.
 *  - Téléphone : 06 62 72 38 49, imprimé sur sa carte tarifaire.
 *  - Note et avis : JSON-LD de la fiche Planity, relevé le 14/08/2026 — 4,97/5 sur 124 avis.
 *    Les textes sont retranscrits mot pour mot, sans correction ni reformulation.
 *  - Positionnement : sa propre bio Instagram et sa description Planity.
 *  - Photos : son compte Instagram et sa galerie Planity.
 *
 * Volontairement absents faute de donnée corroborée : les horaires précis (l'ancien site et la
 * fiche Planity se contredisent — seuls les jours d'ouverture, mardi à samedi, leur sont communs ;
 * sa carte tarifaire, elle, dit simplement « sur RDV »).
 *
 * ⚠️ Le lien Planity est celui de sa bio Instagram, mais la réservation en ligne y est
 * actuellement désactivée (congé). Le téléphone reste donc l'action principale du site.
 */

export const salon = {
  nom: "L'Atelier Secret de Coiffure",
  coiffeuse: "Hélène",
  ville: "Argenteuil",
  adresse: "69 rue Alfred Labrière",
  complementAdresse: "Résidence Floréal",
  codePostal: "95100",
  telephone: "06 62 72 38 49",
  telephoneLien: "tel:+33662723849",
  planity: "https://www.planity.com/latelier-secret-de-coiffure-95100-argenteuil-zn5",
  instagram: "https://www.instagram.com/lateliersecretcoiffure/",
  instagramHandle: "@lateliersecretcoiffure",
  mapsEmbed:
    "https://www.google.com/maps?q=69+rue+Alfred+Labri%C3%A8re,+95100+Argenteuil&output=embed",
  mapsLien:
    "https://www.google.com/maps/search/?api=1&query=69+rue+Alfred+Labri%C3%A8re+95100+Argenteuil",
} as const;

export const nav = [
  { label: "Prestations", href: "#prestations" },
  { label: "Avant / après", href: "#transformations" },
  { label: "Le salon", href: "#salon" },
  { label: "Hélène", href: "#helene" },
  { label: "Formations", href: "#formations" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Salon de coiffure · Argenteuil",
  titre: ["Coloriste,", "sans vis-à-vis."],
  intro:
    "Un salon 100 % féminin, privé et sans vis-à-vis, à six minutes à pied de la gare d'Argenteuil. Balayage, ombré hair et soin de la couleur, par Hélène.",
  ctaPrincipal: { label: "Demander un rendez-vous", href: "#contact" },
  ctaSecondaire: { label: "Voir les prestations", href: "#prestations" },
  note: { valeur: "4,97", base: "5", nombre: 124, source: "Planity" },
  image: {
    src: "/images/hero-balayage-dore.webp",
    alt: "Balayage doré aux ondulations souples réalisé par L'Atelier Secret de Coiffure",
    width: 1200,
    height: 1552,
  },
} as const;

export const signatures = [
  { valeur: "4,97/5", detail: "sur 124 avis" },
  { valeur: "100 %", detail: "féminin, sans vis-à-vis" },
  { valeur: "6 min", detail: "à pied de la gare" },
] as const;

/** Grille reprise de sa carte tarifaire officielle. Les durées viennent de son ancien Planity. */
export const prestations = [
  {
    famille: "Coupe & brushing",
    intro: "Shampooing, coupe et brushing.",
    lignes: [{ nom: "Shampooing, coupe, brushing", duree: "30 à 45 min", prix: "25 / 30 €" }],
     marque: false,
  },
  {
    famille: "Couleur & patine",
    intro: "Shampooing, coupe et brushing compris.",
    lignes: [
      { nom: "Couleur", duree: "1 h 40", prix: "dès 40 €" },
      { nom: "Patine", duree: "", prix: "15 €" },
    ],
     marque: false,
  },
  {
    famille: "Balayage & ombré hair",
    intro: "La spécialité de la maison. Shampooing, coupe et brushing compris.",
    lignes: [
      { nom: "Balayage", duree: "3 h à 3 h 30", prix: "dès 90 €" },
      { nom: "Ombré hair", duree: "3 h à 3 h 30", prix: "dès 110 €" },
    ],
    marque: true,
  },
  {
    famille: "Soins",
    intro: "Pour accompagner une couleur ou réparer une fibre fragilisée.",
    lignes: [
      { nom: "Soin profond Métal Detox ou K18", duree: "30 min", prix: "20 €" },
      { nom: "Soin botox + brushing", duree: "1 h 30", prix: "dès 45 €" },
      { nom: "Lissage brésilien", duree: "3 h", prix: "dès 90 €" },
    ],
     marque: false,
  },
  {
    famille: "Mariée & invitée",
    intro: "Coiffure et maquillage, le même jour et par la même personne.",
    lignes: [
      { nom: "Chignon mariée", duree: "1 h", prix: "dès 60 €" },
      { nom: "Maquillage mariée", duree: "1 h", prix: "95 €" },
      { nom: "Chignon invitée", duree: "1 h", prix: "dès 30 €" },
      { nom: "Maquillage invitée", duree: "1 h", prix: "45 €" },
    ],
     marque: false,
  },
] as const;

export const transformation = {
  eyebrow: "Avant / après",
  titre: "Ce qu'une couleur bien faite change",
  texte:
    "Une même cliente, une même séance. Sur les cheveux fragilisés, la couleur s'accompagne d'un soin profond Métal Detox ou K18 pour limiter la casse.",
} as const;

/**
 * Paires avant/après.
 *
 * `confirme` distingue ce qui est certain de ce qui ne l'est pas. La première paire est sûre :
 * même pull rose, même cadrage, même séance. Les suivantes viennent de fichiers consécutifs du
 * même carrousel Instagram — probable, mais pas prouvé. Elles ne s'affichent donc pas tant
 * qu'Hélène ne les a pas confirmées : il suffira de passer `confirme` à `true`.
 */
export const paires = [
  {
    confirme: true,
    legende: "Carré blond — décoloration reprise et fibre refermée",
    avant: {
      src: "/images/avant-carre-blond.webp",
      alt: "Avant : carré blond terne et fragilisé, longueurs sèches",
      width: 1100,
      height: 1406,
    },
    apres: {
      src: "/images/apres-carre-blond.webp",
      alt: "Après : carré blond lumineux, ondulations souples et fibre refermée",
      width: 1100,
      height: 1527,
    },
  },
  {
    confirme: false,
    legende: "Cheveux longs — frisottis et balayage doré",
    avant: {
      src: "/images/avant-frisottis.webp",
      alt: "Avant : cheveux longs ternes et gonflés",
      width: 1100,
      height: 1501,
    },
    apres: {
      src: "/images/apres-blond-dore.webp",
      alt: "Après : balayage doré et ondulations souples",
      width: 1100,
      height: 1505,
    },
  },
  {
    confirme: false,
    legende: "Brun terne — reflets caramel",
    avant: {
      src: "/images/avant-brun-terne.webp",
      alt: "Avant : brun uniforme et sans relief",
      width: 1100,
      height: 1522,
    },
    apres: {
      src: "/images/apres-balayage-caramel.webp",
      alt: "Après : balayage caramel fondu sur les longueurs",
      width: 1100,
      height: 1534,
    },
  },
] as const;

export const galerie = [
  {
    src: "/images/realisation-blond-polaire.webp",
    alt: "Balayage blond très clair sur cheveux longs",
    width: 860,
    height: 1089,
  },
  {
    src: "/images/realisation-ombre-dore.webp",
    alt: "Ombré hair doré sur base châtain",
    width: 860,
    height: 1177,
  },
  {
    src: "/images/realisation-balayage-caramel.webp",
    alt: "Balayage caramel aux ondulations larges",
    width: 860,
    height: 1200,
  },
  {
    src: "/images/realisation-balayage-clair.webp",
    alt: "Balayage clair fondu sur cheveux très longs",
    width: 860,
    height: 1019,
  },
  {
    src: "/images/realisation-brun-caramel.webp",
    alt: "Brun réchauffé de reflets caramel",
    width: 860,
    height: 1104,
  },
  {
    src: "/images/realisation-ombre-chaud.webp",
    alt: "Ombré hair aux reflets chauds sur cheveux mi-longs",
    width: 860,
    height: 1165,
  },
  {
    src: "/images/realisation-blond-dore.webp",
    alt: "Blond doré travaillé en dégradé de longueurs",
    width: 860,
    height: 1188,
  },
  {
    src: "/images/realisation-brun-chocolat.webp",
    alt: "Brun chocolat brillant aux boucles définies",
    width: 860,
    height: 862,
  },
  {
    src: "/images/realisation-ombre-cuivre.webp",
    alt: "Ombré hair cuivré sur cheveux longs ondulés",
    width: 860,
    height: 1263,
  },
] as const;

export const salonSection = {
  eyebrow: "Le salon",
  titre: "Petit, cossu, et rien que pour vous",
  paragraphes: [
    "Un cadre cosy, privé et sans vis-à-vis, où l'on est reçue seule. Sol de marbre clair, grand miroir rond, lumière douce : le salon tient dans une pièce, et c'est exactement ce qui fait sa valeur.",
    "Hélène met toute son attention sur un seul projet capillaire à la fois. Pour toute coloration, balayage ou ombré hair, elle propose un soin profond Métal Detox afin de limiter la casse sur les cheveux sensibilisés.",
  ],
  citation: {
    texte: "Cabinet très soigné, aéré et lumineux.",
    source: "Avis client, avril 2026",
  },
  /*
    Cette section montre le lieu. Deux résultats terminés, choisis pour ce qu'on voit derrière :
    le grand miroir rond sur l'un, le sol de marbre sur l'autre — exactement ce que décrit le
    texte. Pas de chevelure en cours de pose, pas de résultat terne : dans une section sur le
    salon, l'œil lit quand même les cheveux en premier.
  */
  images: [
    {
      src: "/images/salon-miroir-rond.webp",
      alt: "Balayage terminé devant le grand miroir rond noir du salon",
      width: 900,
      height: 1382,
    },
    {
      src: "/images/salon-sol-marbre.webp",
      alt: "Balayage doré ondulé, sol de marbre clair du salon en arrière-plan",
      width: 900,
      height: 1102,
    },
  ],} as const;

export const mariee = {
  eyebrow: "Mariées",
  titre: "Coiffure et maquillage, par la même personne",
  texte:
    "Chignon et maquillage de mariée sont assurés par Hélène, sans avoir à coordonner deux prestataires le matin même. Les invitées peuvent être prises en charge dans la foulée.",
  points: ["Chignon mariée dès 60 €", "Maquillage mariée 95 €", "Invitées : chignon dès 30 €, maquillage 45 €"],
  image: {
    src: "/images/chignon-mariee.webp",
    alt: "Chignon de mariée réalisé par L'Atelier Secret de Coiffure",
    width: 1000,
    height: 1237,
  },
} as const;

/**
 * La formation est annoncée dans le nom même de son compte Instagram
 * (« coiffeuse maquillage formation ») et par une story à la une dédiée.
 * Le format, le public et les tarifs ne sont documentés nulle part : la section invite à
 * demander le détail plutôt que d'inventer un programme.
 */
export const formations = {
  eyebrow: "Formations",
  titre: "Transmettre le métier",
  texte:
    "Au-delà du salon, Hélène forme aussi à la coiffure et au maquillage. Le programme, les dates et les modalités sont communiqués sur demande.",
  cta: { label: "Demander le programme", href: "#contact" },
} as const;

/**
 * Photos de son matériel et de ses produits, issues de son ancienne galerie Planity.
 * Origine confirmée par Mathieu : ce sont bien ses photos. À noter pour plus tard — le sol y est
 * en bois alors que ses clichés récents montrent un marbre blanc : elles datent vraisemblablement
 * du salon de Montesson, avant le déménagement.
 */
export const produits = {
  eyebrow: "Sur vos cheveux",
  titre: "Ce qui entre dans une couleur",
  texte:
    "Une couleur réussie tient autant au produit qu'au geste. Le soin profond Métal Detox ou K18 accompagne systématiquement une coloration, un balayage ou un ombré hair, pour limiter la casse sur une fibre déjà sensibilisée.",
  images: [
    {
      src: "/images/produit-nuanciers.webp",
      alt: "Nuanciers de coloration professionnelle déployés sur un plan de travail",
      width: 900,
      height: 601,
    },
    {
      src: "/images/produit-coloration-pure.webp",
      alt: "Étuis de coloration professionnelle PURE",
      width: 900,
      height: 601,
    },
    {
      src: "/images/produit-blond-studio.webp",
      alt: "Poudre décolorante Blond Studio et ciseaux dans le bac de travail",
      width: 900,
      height: 601,
    },
    {
      src: "/images/produit-k18.webp",
      alt: "Présentoir du soin K18 dans le salon",
      width: 900,
      height: 601,
    },
  ],
} as const;

/**
 * Portrait d'Hélène.
 *
 * Uniquement des faits sourcés : la description qu'elle a elle-même publiée sur Planity, les
 * trois métiers annoncés dans son compte Instagram, et ce que disent ses avis. Aucune citation
 * ne lui est prêtée — elle n'a jamais parlé à ce site.
 */
export const helene = {
  eyebrow: "La coiffeuse",
  titre: "Hélène",
  paragraphes: [
    "Coloriste et coiffeuse, elle reçoit seule, dans un salon qu'elle a voulu privé et sans vis-à-vis. Balayage, ombré hair, patine, lissage brésilien : la couleur est son terrain, et elle l'accompagne systématiquement d'un soin profond Métal Detox ou K18 sur les cheveux sensibilisés.",
    "Elle est aussi maquilleuse — chignon et maquillage de mariée sont assurés par la même personne, le même matin — et elle forme à ces deux métiers.",
    "Sur les vingt derniers avis publiés, les vingt la citent par son prénom. Plusieurs parlent en années.",
  ],
  citation: {
    texte:
      "Vous vous sentirez comme chez vous, en compagnie de votre coiffeuse Hélène, hyper sympathique en plus d'être une coloriste et coiffeuse très talentueuse.",
    source: "Présentation du salon, Planity",
  },
} as const;

export const faq = {
  eyebrow: "Questions fréquentes",
  titre: "Avant de venir",
  items: [
    {
      q: "Faut-il prendre rendez-vous ?",
      r: "Oui, le salon reçoit uniquement sur rendez-vous, du mardi au samedi. C'est ce qui permet de n'avoir qu'une seule cliente à la fois.",
    },
    {
      q: "Combien de temps prévoir pour un balayage ?",
      r: "Entre 3 h et 3 h 30 selon la longueur, shampooing, coupe et brushing compris. Comptez 1 h 40 pour une couleur, 1 h 30 pour un soin botox et 3 h pour un lissage brésilien.",
    },
    {
      q: "Comment accéder au salon ?",
      r: "Le salon se trouve à l'intérieur de la Résidence Floréal, au 69 rue Alfred Labrière : il n'y a pas de vitrine sur rue. Comptez 6 minutes à pied depuis la gare d'Argenteuil.",
    },
    {
      q: "Mes cheveux sont abîmés, puis-je quand même faire une couleur ?",
      r: "C'est justement le cas de figure prévu : pour toute coloration, balayage ou ombré hair, un soin profond Métal Detox ou K18 est proposé afin de limiter la casse sur une fibre déjà sensibilisée.",
    },
    {
      q: "Coiffez-vous les mariées ?",
      r: "Oui, chignon et maquillage, par la même personne et le même jour. Les invitées peuvent être prises en charge dans la foulée. Ces dates se réservent longtemps à l'avance.",
    },
    {
      q: "Proposez-vous des formations ?",
      r: "Oui, à la coiffure et au maquillage. Le programme, les dates et les modalités sont communiqués sur demande.",
    },
  ],
} as const;

/**
 * Bandeau d'information, désactivé par défaut.
 * À passer à `actif: true` en renseignant la date, si le salon est en pause au moment où l'URL
 * est diffusée : mieux vaut l'annoncer que laisser une cliente réserver dans le vide.
 */
export const banniere = {
  actif: false,
  texte: "Le salon est momentanément fermé. Retour prévu le [DATE] — les demandes reçues d'ici là seront traitées à la réouverture.",
} as const;

export const pourquoi = [
  {
    titre: "Un seul rendez-vous à la fois",
    texte:
      "Pas de salle d'attente ni de vis-à-vis : la séance vous appartient du début à la fin.",
  },
  {
    titre: "Coloriste avant tout",
    texte:
      "Balayage, ombré hair, patine, correction de couleur : le cœur du métier, pas une option au catalogue.",
  },
  {
    titre: "La fibre d'abord",
    texte:
      "Soin profond Métal Detox ou K18 systématiquement proposé avec une couleur, un balayage ou un ombré.",
  },
  {
    titre: "Des clientes qui restent",
    texte:
      "Une part des avis parle en années : « ça fait des années que je suis suivie par elle et je ne la changerai pas ».",
  },
] as const;

/**
 * Avis retranscrits mot pour mot depuis le JSON-LD de la fiche Planity
 * (`reference-materiel/avis-planity-2026-08-14.json`). Planity publie les avis sous
 * « Anonyme » : aucun prénom n'a été ajouté.
 */
export const avis = {
  note: "4,97",
  nombre: 124,
  source: "Planity",
  lien: "https://www.planity.com/latelier-secret-de-coiffure-95100-argenteuil-zn5",
  items: [
    {
      texte:
        "Rien à signaler toujours un Plaisir redevenir se faire chouchouter par Helene, ça fait des années que je suis suivie par elle et je ne la changerai pas",
      date: "Décembre 2025",
    },
    {
      texte:
        "Cabinet très soigné, aéré et lumineux. Je recommande sans hésitation coiffeuse à l'écoute de la cliente et toujours agréable, souriante, dynamique.",
      date: "Avril 2026",
    },
    { texte: "Vous ne trouverez pas mieux ! Doigts de fée !", date: "Février 2026" },
    {
      texte:
        "Très ravie de la prestation effectuée ! Hélène est hyper sympathique et donne de précieux conseils pour garder de beaux cheveux. Je recommande à 100%",
      date: "Avril 2026",
    },
    {
      texte:
        "Hélène m'a très bien accueilli. Très douce dans ses gestes et à l'écoute, ce qui m'as permis de me sentir très à l'aise.",
      date: "Février 2026",
    },
    {
      texte:
        "Hélène prends soin de mes cheveux depuis des années et je suis toujours autant satisfaite ! Merci pour son sourire, son accueil, sa gentillesse et son professionnalisme !",
      date: "Décembre 2025",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  titre: "Prendre rendez-vous",
  texte:
    "Le salon reçoit uniquement sur rendez-vous, du mardi au samedi. Appelez directement, réservez en ligne, ou laissez vos coordonnées : Hélène vous rappelle pour convenir d'un créneau.",
  prestationsOptions: [
    "Coupe & brushing",
    "Couleur ou patine",
    "Balayage ou ombré hair",
    "Soin ou lissage brésilien",
    "Mariée ou invitée",
    "Formation",
    "Autre",
  ],
  acces: [
    { label: "Téléphone", valeur: "06 62 72 38 49", lien: "tel:+33662723849" },
    { label: "Adresse", valeur: "69 rue Alfred Labrière, Résidence Floréal — 95100 Argenteuil" },
    { label: "Jours d'ouverture", valeur: "Du mardi au samedi, sur rendez-vous" },
    { label: "Accès", valeur: "6 min à pied de la gare d'Argenteuil" },
  ],
  image: {
    src: "/images/entree-residence-floreal.webp",
    alt: "Entrée de la Résidence Floréal, 69 rue Alfred Labrière à Argenteuil",
    width: 1100,
    height: 825,
  },
} as const;
