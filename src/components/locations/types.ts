export type Data = {
    locations: Locations
}

export type LocationByIDsData = {
    locationsByIds: LocationsById[]
}

export type Locations = {
    results: Result[]
}

export type LocationsById = {
    dimension: string
    id: string
    name: string
    type: string
    residents: Resident[]
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

// export type Episode = {
//     id: string
//     episode: string
//     air_date: string
//     name: string
// }