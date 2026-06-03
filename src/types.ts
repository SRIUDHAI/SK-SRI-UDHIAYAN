export interface Song {
  id: string;
  title: string;
  artist: string;
  url: string;
  logo: string;
  lyrics: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  videoUrl: string;
  images?: string[];
  gradient?: string;
}

export interface AppPortfolio {
  id: string;
  name: string;
  logo: string;
  description: string;
  videoUrl: string;
  accentColor: string;
}

export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  role?: string;
}
