import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 0,
    title: "Me especializo en Electrónica",
    image: "/images/blog/dj1.jpeg",
    author: {
      name: "Dj ElectroMan",
      image: "/images/blog/dj1.jpeg",
      designation: "DJ",
    },
    tags: ["Electrónica"],
    publishDate: "2023",
    genre: "Electrónica",
    paragraph: "Apasionado por la música electrónica, he estado mezclando desde los 90s. Mis sets te harán bailar toda la noche.",
    rating: 4.7,
    bookings: 128,
    price: "$500 - $1000",
    availableDates: ["2024-03-15", "2024-03-22", "2024-03-29"],
    socialLinks: {
      facebook: "https://www.facebook.com/DJElectroMan",
      instagram: "https://www.instagram.com/DJElectroMan",
      twitter: "https://twitter.com/DJElectroMan",
    },
  },
  {
    id: 1,
    title: "Lo mío es la salsa",
    image: "/images/blog/dj2.jpeg",
    author: {
      name: "Dj SalsaQueen",
      image: "/images/blog/dj2.jpeg",
      designation: "DJ",
    },
    tags: ["Salsa"],
    publishDate: "2024",
    genre: "Salsa",
    paragraph: "Amante de la salsa desde joven, traigo la esencia de la música latina a tus eventos. ¡Baila conmigo!",
    rating: 4.9,
    bookings: 95,
    price: "$600 - $1200",
    availableDates: ["2024-03-16", "2024-03-23", "2024-03-30"],
    socialLinks: {
      facebook: "https://www.facebook.com/DJSalsaQueen",
      instagram: "https://www.instagram.com/DJSalsaQueen",
      twitter: "https://twitter.com/DJSalsaQueen",
    },
  },
  {
    id: 2,
    title: "En mi caso es regaeton.",
    image: "/images/blog/dj3.jpeg",
    author: {
      name: "Dj ReggaetonMaster",
      image: "/images/blog/dj3.jpeg",
      designation: "DJ",
    },
    tags: ["Reggaetón"],
    publishDate: "2024",
    genre: "Reggaetón",
    paragraph: "Especializado en reggaetón urbano, mis mezclas te harán vibrar con los ritmos latinos más calientes.",
    rating: 4.5,
    bookings: 112,
    price: "$550 - $1100",
    availableDates: ["2024-03-17", "2024-03-24", "2024-03-31"],
    socialLinks: {
      facebook: "https://www.facebook.com/DJReggaetonMaster",
      instagram: "https://www.instagram.com/DJReggaetonMaster",
      twitter: "https://twitter.com/DJReggaetonMaster",
    },
  },
];

export default blogData;
