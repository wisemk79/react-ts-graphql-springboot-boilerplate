import { gql } from 'apollo-boost';


export const GET_USERS = gql`
  query getUsers() {
		User() {
            id
            name
		}
}`;

export const INSERT_USER = gql`
  mutation InsertUser(
    $id: Number,
    $name: String
  ) {
		insertUser(
            id: $id,
            name: $name
        ) {
            id
            name
		}
}`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: Number,
    $name: String
  ) {
		updateUser(
            id: $id,
            name: $name
        ) {
            id
            name
		}
}`;

export const DELETE_USER = gql`
  mutation deleteUser(
    $id: Number
  ) {
		deleteUser(
            id: $id
        ) {
            id
            name
		}
}`;