export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;

  youtubeLink: any;
  key: string;

  genres: {backdrop_path: string};
  name: string;
  logo_path: string;
}
