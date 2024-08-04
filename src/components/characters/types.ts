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

export type CharactersById = {
    created: string
    gender: string
    id: string
    image: string
    species: string
    status: string
    type: string
    name: string
    origin: Origin
}

export type Origin = {
    created: string
    dimension: string
    name: string
    id: string
    type: string
}

export type CharactersByIdData = {
    charactersByIds: CharactersById[]
}
