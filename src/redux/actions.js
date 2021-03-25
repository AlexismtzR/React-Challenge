export const ADD_COMMENT = "ADD_COMMENT";
export const SET_POSTS = "SET_POSTS";
export const SET_COMMENTS = "SET_COMMENTS";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const setComments = (comments) => ({
    type: SET_COMMENTS,
    payload: comments,
  });