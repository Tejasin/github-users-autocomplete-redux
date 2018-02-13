import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import githubUsersThunkReducer from "./githubUsersThunk"

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,

  githubUsersThunkReducer: githubUsersThunkReducer
});
