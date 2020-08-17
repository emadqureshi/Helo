import axios from "axios";

const initialState = {
  user: [],
  posts: []
};

const GET_USER = "GET_USER";
const GET_POSTS = "GET_POSTS";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

export default function reducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });
    case `${GET_POSTS}_FULFILLED`:
      return Object.assign({}, state, { posts: action.payload });

    case `${UPDATE_POST}_FULFILLED`:
      return Object.assign({}, state, { posts: action.payload });
    case `${DELETE_POST}_FULFILLED`:
      return Object.assign({}, state, { posts: action.payload });
    default:
      return state;
  }
}

export function getUser(username, password) {
  return {
    type: GET_USER,
    payload: axios
      .post(`/api/login`, { username, password })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}
export function getPosts(id) {
  return {
    type: GET_POSTS,
    payload: axios
      .get(`/api/posts/${id}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}

export function updatePost(content, id) {
  return {
    type: UPDATE_POST,
    payload: axios
      .put(`/api/editpost/${id}`, { content })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(console.log())
  };
}

export function deletePost(post_id) {
  return {
    type: DELETE_POST,
    payload: axios
      .delete(`/api/deletepost/${post_id}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(console.log())
  };
}