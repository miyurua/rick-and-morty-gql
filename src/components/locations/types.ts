export type Data = {
    locations: Locations
}

export type Locations = {
    results: Result[]
}

export type Result = {
    name: string
    id: string
    dimension: string
    type: string
    residents: Resident[]
}

export type Resident = {
    name: string
    image: string
    species: string
    status: string
    type: string
    gender: string
    id: string
}