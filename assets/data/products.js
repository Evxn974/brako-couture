/* =========================================================
   BRAKO(R) - Fichier de donnees produits & visuels
   Modifiez ce fichier pour changer les images, prix,
   couleurs ou ajouter de nouveaux articles / shootings.
   Chaque image est juste un chemin vers assets/images/.
   ========================================================= */

const BRAKO_HERO_SLIDES = [
  {
    image: "assets/images/hero-brako-01.jpg",
    title: "BRAKO",
    subtitle: "STREETWEAR x HAUTE-COUTURE x FUTURISTE",
    cta: "Decouvrir la collection",
    link: "#boutique"
  },
  {
    image: "assets/images/hero-brako-02.jpg",
    title: "NOUVELLE ERE",
    subtitle: "Une marque francaise, nee dans la nuit",
    cta: "Voir le lookbook",
    link: "#lookbook"
  },
  {
    image: "assets/images/hero-brako-03.jpg",
    title: "EDITION LIMITEE",
    subtitle: "Pieces rares, series courtes",
    cta: "Explorer",
    link: "#boutique"
  }
];

const BRAKO_PRODUCTS = [
  {
    id: "hoodie-wanted",
    name: "Hoodie WANTED",
    category: "hauts",
    price: 139,
    tag: "Best-seller",
    colors: ["Noir", "Ecru"],
    images: [
      "assets/images/hoodie-wanted-bw-duo.jpg",
      "assets/images/hoodie-wanted-masks-group.jpg"
    ],
    description: "Hoodie zippe brode, graphisme WANTED signature. Coupe oversize, maille epaisse."
  },
  {
    id: "tee-runner",
    name: "T-shirt BRAKO Runner",
    category: "hauts",
    price: 59,
    tag: "Nouveau",
    colors: ["Noir/Jaune", "Beige", "Blanc"],
    images: [
      "assets/images/tee-runner-black-yellow-detail.jpg",
      "assets/images/tee-runner-beige-detail.jpg",
      "assets/images/tee-runner-lifestyle-car.jpg"
    ],
    description: "T-shirt signature avec logo BRAKO et personnage runner brode."
  },
  {
    id: "tee-capsule-rose",
    name: "T-shirt BRAKO Capsule Rose",
    category: "hauts",
    price: 59,
    tag: "",
    colors: ["Rose"],
    images: [
      "assets/images/tee-runner-pink-front.jpg",
      "assets/images/tee-runner-pink-back.jpg"
    ],
    description: "Capsule ete, coloris rose, coupe droite streetwear."
  },
  {
    id: "short-mohair",
    name: "Short Mohair BRAKO",
    category: "bas",
    price: 89,
    tag: "Edition limitee",
    colors: ["Orange", "Bleu ciel", "Rose", "Bordeaux", "Noir"],
    images: [
      "assets/images/shorts-rack-collection.jpg",
      "assets/images/shorts-orange-monogram-back.jpg",
      "assets/images/outfit-black-tee-orange-shorts.jpg"
    ],
    description: "Short en maille mohair douce, poche monogram brodee, cordon de serrage."
  },
  {
    id: "doudoune-sans-manches",
    name: "Doudoune sans manches BRAKO",
    category: "hauts",
    price: 159,
    tag: "",
    colors: ["Ecru"],
    images: [
      "assets/images/vest-white-orange-tee-full.jpg",
      "assets/images/tee-orange-detail.jpg"
    ],
    description: "Doudoune sans manches, finitions haute-couture, portee sur t-shirt logo."
  },
  {
    id: "tote-bag",
    name: "Tote Bag BRAKO",
    category: "accessoires",
    price: 25,
    tag: "",
    colors: ["Marine"],
    images: [
      "assets/images/accessory-tote-bag.jpg"
    ],
    description: "Tote bag toile epaisse, logo BRAKO imprime blanc."
  },
  {
    id: "bonnet",
    name: "Bonnet BRAKO",
    category: "accessoires",
    price: 39,
    tag: "",
    colors: ["Noir", "Rouge"],
    images: [
      "assets/images/accessory-beanie-bw.jpg",
      "assets/images/portrait-red-beanie.jpg"
    ],
    description: "Bonnet cotele epais, lettrage BRAKO en relief."
  }
];

const BRAKO_LOOKBOOK = [
  { image: "assets/images/hero-brako-02.jpg", caption: "Station essence, minuit, quelque part en France." },
  { image: "assets/images/hoodie-wanted-masks-group.jpg", caption: "Le collectif BRAKO, visages masques, esprit clan." },
  { image: "assets/images/tee-runner-lifestyle-car.jpg", caption: "Habitacle, vitesse, silhouette BRAKO." },
  { image: "assets/images/tee-runner-pink-front.jpg", caption: "Palma de Mallorca, facade rose, capsule ete." },
  { image: "assets/images/portrait-red-beanie.jpg", caption: "Escaliers graffes, bonnet rouge, allure urbaine." },
  { image: "assets/images/outfit-black-tee-orange-shorts.jpg", caption: "Carriere de pierre, matieres brutes." },
  { image: "assets/images/vest-white-orange-tee-full.jpg", caption: "Escaliers graffes, doudoune sans manches ecru." },
  { image: "assets/images/shorts-rack-collection.jpg", caption: "Le rack showroom, toutes les teintes mohair." }
];
