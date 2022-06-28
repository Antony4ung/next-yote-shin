import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

import {
  actionVideoReducer,
  documentaryTvReducer,
  trendingTvReducer,
  romanceTvReducer,
  originalsTvReducer,
  topRatedTvReducer,
  actionTvReducer,
  comedyTvReducer,
  horrorTvReducer,
  comedyReducer,
  documentaryReducer,
  horrorReducer,
  originalsReducer,
  romanceReducer,
  topRatedReducer,
  trendingVideoReducer,
} from "./reducers/videoReducer";

const rootReducer = combineReducers({
  trendingVideoReducer: trendingVideoReducer,
  originalsReducer: originalsReducer,
  topRatedReducer: topRatedReducer,
  actionVideoReducer: actionVideoReducer,
  comedyReducer: comedyReducer,
  horrorReducer: horrorReducer,
  romanceReducer: romanceReducer,
  documentaryReducer: documentaryReducer,
  // detailsReducer:detailsReducer
  trendingTvReducer: trendingTvReducer,
  originalsTvReducer: originalsTvReducer,
  topRatedTvReducer: topRatedTvReducer,
  actionTvReducer: actionTvReducer,
  comedyTvReducer: comedyTvReducer,
  horrorTvReducer: horrorTvReducer,
  romanceTvReducer: romanceTvReducer,
  documentaryTvReducer: documentaryTvReducer,
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);