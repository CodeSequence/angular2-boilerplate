export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publishDate: string;
  description: string;
  thumbnail: string;
}

export interface ApiBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}
