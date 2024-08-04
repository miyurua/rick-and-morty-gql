import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
query Query {
  characters {
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