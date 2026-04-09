/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  {
    question: "Que se passe-t-il lorsqu’un rayon lumineux arrive sur un miroir ?",
    options: ["Il disparaît", "Il est réfléchi", "Il est absorbé", "Il change de couleur"],
    graphique: "rayon_reflexion_miroir.png",
    bonne_reponse: "Il est réfléchi",
    explication: "La lumière est renvoyée dans le même milieu : c’est la réflexion."
  },
  {
    question: "Quelle relation existe entre l’angle d’incidence i et l’angle réfléchi i’ ?",
    options: ["i = i’", "i > i’", "i < i’", "i + i’ = 90°"],
    graphique: "angles_reflexion.png",
    bonne_reponse: "i = i’",
    explication: "Selon la loi de la réflexion, l’angle d’incidence est égal à l’angle réfléchi."
  },
  {
    question: "Que représente la normale dans une expérience de réflexion ?",
    options: [
      "Une ligne parallèle à la surface",
      "Une ligne perpendiculaire à la surface",
      "Le rayon lumineux",
      "La direction du miroir"
    ],
    graphique: "normale_surface.png",
    bonne_reponse: "Une ligne perpendiculaire à la surface",
    explication: "La normale est une droite perpendiculaire à la surface au point d’impact."
  },
  {
    question: "Que se passe-t-il lorsqu’un rayon lumineux passe de l’air au plexiglas ?",
    options: [
      "Il disparaît",
      "Il est réfléchi uniquement",
      "Il change de direction",
      "Il reste identique"
    ],
    graphique: "refraction_air_plexiglas.png",
    bonne_reponse: "Il change de direction",
    explication: "La lumière subit une réfraction lorsqu’elle change de milieu."
  },
  {
    question: "Quelle grandeur caractérise un milieu transparent ?",
    options: ["La masse", "La vitesse", "L’indice de réfraction", "La température"],
    graphique: "indice_refraction.png",
    bonne_reponse: "L’indice de réfraction",
    explication: "L’indice de réfraction mesure la capacité d’un milieu à dévier la lumière."
  },
  {
    question: "Dans la loi de Snell-Descartes, que signifie n1 ?",
    options: [
      "L’angle d’incidence",
      "L’indice du premier milieu",
      "La vitesse de la lumière",
      "La distance parcourue"
    ],
    graphique: "loi_snell_schema.png",
    bonne_reponse: "L’indice du premier milieu",
    explication: "n1 correspond à l’indice du milieu d’où vient la lumière."
  },
  {
    question: "Que se passe-t-il si l’angle d’incidence dépasse l’angle limite ?",
    options: [
      "La lumière disparaît",
      "La lumière est totalement réfléchie",
      "La lumière traverse toujours",
      "La lumière ralentit"
    ],
    graphique: "reflexion_totale.png",
    bonne_reponse: "La lumière est totalement réfléchie",
    explication: "C’est le phénomène de réflexion totale."
  },
  {
    question: "Dans quel cas observe-t-on la réflexion totale ?",
    options: [
      "Air vers verre",
      "Verre vers air avec grand angle",
      "Dans le vide",
      "Sur un miroir uniquement"
    ],
    graphique: "angle_limite_schema.png",
    bonne_reponse: "Verre vers air avec grand angle",
    explication: "La réflexion totale se produit quand la lumière passe d’un milieu plus réfringent vers un moins réfringent avec un angle suffisant."
  },
  {
    question: "Pourquoi utilise-t-on la réflexion totale dans les fibres optiques ?",
    options: [
      "Pour ralentir la lumière",
      "Pour changer sa couleur",
      "Pour la garder confinée dans le câble",
      "Pour l’absorber"
    ],
    graphique: "fibre_optique.png",
    bonne_reponse: "Pour la garder confinée dans le câble",
    explication: "La réflexion totale permet de guider la lumière sur de longues distances."
  },
  {
    question: "Dans un milieu homogène et transparent, comment se propage la lumière ?",
    options: [
      "En cercle",
      "En ligne droite",
      "En zigzag",
      "De manière aléatoire"
    ],
    graphique: "propagation_rectiligne.png",
    bonne_reponse: "En ligne droite",
    explication: "La lumière se propage de façon rectiligne dans un milieu homogène."
  }
];

/* ============================================================
   ====================  FIN DES QUESTIONS  ==================
   ============================================================ */
