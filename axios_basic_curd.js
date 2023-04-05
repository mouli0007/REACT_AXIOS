import axios from "axios";

const url = "https://rickandmortyapi.com/api/character?";

const api = axios.create({
  baseUrl: url,
});

// Getting the Users
export const getUsers = () => api.get().then((data) => data.results);

// Get user By id
export const getUserByID = (id) =>
  api.get(`/users/${id}`).then((res) => res.results);

//   Updating the User ByID
export const updatedUser = ({ id, ...updatedUser }) =>
  api.put(`/users/${id}`, updatedUser).then((res) => res.data);
