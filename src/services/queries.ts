import { gql } from "@apollo/client";

export const GET_SHIPS = gql`
  query GetShips($limit: Int!, $offset: Int!, $find: ShipsFind) {
    ships(limit: $limit, offset: $offset, find: $find) {
      id
      name
      image
      type
      active
      home_port
      year_built
      missions {
        name
      }
      weight_kg
    }
  }
`;

export const GET_SHIP = gql`
  query GetShip($id: ID!) {
    ship(id: $id) {
      id
      name
      image
      type
      active
      home_port
      year_built
      missions {
        name
      }
      weight_kg
    }
  }
`;
