
import { setPosts, SET_POSTS, SET_COMMENTS, setComments, ADD_COMMENT } from "./actions"

const initialState = {
  posts: [],
  comments: []
}

export const postReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_COMMENT: {
      return {...state, comments: [...state.comments, action.payload]}
    }
    case SET_POSTS: {
      return {...state, posts: action.payload}
    }
    case SET_COMMENTS: {
        return {...state, comments: action.payload}
      }
    default:
      return state
  }
}

export const loadPosts = () => async (dispatch, getState) => {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  dispatch(setPosts(post))
} 

export const loadComments = () => async (dispatch, getState) => {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
    dispatch(setComments(comments))
  } 