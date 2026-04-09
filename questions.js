/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  /* ================= PROBABILITÉS ================= */

  {
    question: "Que représente l’événement E dans ce contexte ?",
    options: [
      "Le dossier est validé",
      "Le dossier contient une erreur",
      "Le système fonctionne",
      "Le client est satisfait"
    ],
    graphique: "evenement_E.png",
    bonne_reponse: "Le dossier contient une erreur",
    explication: "E correspond à l’événement : le dossier contient une erreur."
  },
  {
    question: "Quelle est la probabilité qu’un dossier contienne une erreur ?",
    options: ["0,1", "0,8", "0,05", "0,9"],
    graphique: "probabilite_erreur.png",
    bonne_reponse: "0,1",
    explication: "10 % des dossiers contiennent une erreur, soit 0,1."
  },
  {
    question: "Que signifie P(E ∩ D) ?",
    options: [
      "Aucun dossier détecté",
      "Dossiers sans erreur",
      "Dossiers erronés détectés",
      "Dossiers non détectés"
    ],
    graphique: "intersection_ED.png",
    bonne_reponse: "Dossiers erronés détectés",
    explication: "P(E ∩ D) représente les dossiers avec erreur ET détectés."
  },
  {
    question: "Quelle est la probabilité que le système détecte une erreur ?",
    options: ["0,08", "0,045", "0,125", "0,64"],
    graphique: "probabilite_detection.png",
    bonne_reponse: "0,125",
    explication: "P(D) = 0,08 + 0,045 = 0,125."
  },
  {
    question: "Quelle est la probabilité qu’un dossier soit erroné sachant qu’il est détecté ?",
    options: ["0,64", "0,125", "0,08", "0,9"],
    graphique: "probabilite_conditionnelle.png",
    bonne_reponse: "0,64",
    explication: "P(E sachant D) = 0,64 soit 64 %."
  },

  /* ================= FONCTIONS ================= */

  {
    question: "Quelle est la dérivée de la fonction h(x) = x³ − 6x² + 9x + 12 ?",
    options: [
      "3x² − 12x + 9",
      "x² − 6x + 9",
      "3x² − 6x + 9",
      "x³ − 12x + 9"
    ],
    graphique: "derivee_fonction.png",
    bonne_reponse: "3x² − 12x + 9",
    explication: "La dérivée d’un polynôme se calcule terme à terme."
  },
  {
    question: "Quelle est la forme factorisée de h’(x) ?",
    options: [
      "3(x − 1)(x − 3)",
      "(x − 1)(x − 3)",
      "3(x + 1)(x − 3)",
      "3(x − 1)(x + 3)"
    ],
    graphique: "factorisation.png",
    bonne_reponse: "3(x − 1)(x − 3)",
    explication: "On factorise le polynôme du second degré."
  },
  {
    question: "Quelles sont les solutions de h’(x) = 0 ?",
    options: [
      "x = 1 et x = 3",
      "x = 0 et x = 6",
      "x = 2 et x = 4",
      "x = 3 uniquement"
    ],
    graphique: "solutions_derivee.png",
    bonne_reponse: "x = 1 et x = 3",
    explication: "Les racines sont obtenues à partir des facteurs."
  },
  {
    question: "Quelle est la valeur de h(3) ?",
    options: ["12", "66", "0", "9"],
    graphique: "calcul_h3.png",
    bonne_reponse: "12",
    explication: "En remplaçant x par 3 dans la fonction, on obtient 12."
  },
  {
    question: "Combien d’agents faut-il mobiliser pour optimiser le temps ?",
    options: ["1", "3", "6", "0"],
    graphique: "minimum_fonction.png",
    bonne_reponse: "3",
    explication: "Le minimum de la fonction est atteint pour x = 3."
  }
];

/* ============================================================
   ====================  FIN DES QUESTIONS  ==================
   ============================================================ */
