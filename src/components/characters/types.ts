export type Result = {
    name: string;
    image: string;
    species: string;
    status: string;
    type: string;
    gender: string;
    id: string;
}

export type Characters = {
    results: Result[];
}

export type Data = {
    characters: Characters
}