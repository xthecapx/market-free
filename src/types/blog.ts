type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  genre: string;
  publishDate: string;
  rating: number;
  bookings: number;
  price: string;
  availableDates: string[];
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  }
};
