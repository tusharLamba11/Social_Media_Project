import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";
export default (posts = [], action) => {
  switch (action.type) {
    case UPDATE:
      return [...posts, action.payload];
    case CREATE:
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    default:
      return posts;
  }
};
