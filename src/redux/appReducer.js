import { combineReducers } from "redux";

import postsReducer from "./reducers/posts.reducer";

const appReducer = combineReducers({
  root: postsReducer,
});

export default appReducer;
