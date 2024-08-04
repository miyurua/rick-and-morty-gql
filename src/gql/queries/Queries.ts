import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
query Query($filter: FilterCharacter, $page: Int) {
  characters(filter: $filter, page: $page) {
    results {
      name
      image
      species
      status
      type
      gender
      id
    }
  }
}`

export const GET_CHARACTER_BY_ID = gql`
query Query($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    created
    gender
    id
    image
    species
    status
    type
    name
    origin {
      created
      dimension
      name
      id
      type
    }
  }
}`

export const GET_ALL_EPISODES = gql`
query Episodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    info {
      count
    }
    results {
      id
      episode
      air_date
      name
      characters {
        name
        image
        species
        status
        type
        gender
        id
      }
    }
  }
}
`
export const GET_EPISODE_BY_ID = gql`
query Query($ids: [ID!]!) {
  episodesByIds(ids: $ids) {
    air_date
    episode
    name
    id
     characters {
        name
        image
        species
        status
        type
        gender
        id
      }
  }
}
`