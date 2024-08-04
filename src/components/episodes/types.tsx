export type Data = {
  episodes: Episodes;
};

export type Episodes = {
  info: Info;
  results: Result[];
};

export type Info = {
  count: number;
};

export type Result = {
  id: string;
  episode: string;
  air_date: string;
  name: string;
  characters: Character[];
};

export type Character = {
  name: string;
  image: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  id: string;
};
