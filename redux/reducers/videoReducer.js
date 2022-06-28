import {
    ACTION_MOVIES_FAIL,
    ACTION_MOVIES_REQUEST,
    ACTION_MOVIES_SUCCESS,
    COMEDY_FAIL,
    COMEDY_REQUEST,
    COMEDY_SUCCESS,
    DOCUMENTARY_FAIL,
    DOCUMENTARY_REQUEST,
    DOCUMENTARY_SUCCESS,
    HORROR_FAIL,
    HORROR_REQUEST,
    HORROR_SUCCESS,
    ORIGINAL_FAIL,
    ORIGINAL_REQUEST,
    ORIGINAL_SUCCESS,
    ROMANCE_FAIL,
    ROMANCE_REQUEST,
    ROMANCE_SUCCESS,
    TOP_RATED_FAIL,
    TOP_RATED_REQUEST,
    TOP_RATED_SUCCESS,
    TRENDING_FAIL,
    TRENDING_REQUEST,
    TRENDING_SUCCESS,
    TRENDING_TV_REQUEST,
    ACTION_TV_FAIL,
    COMEDY_TV_SUCCESS,
    COMEDY_TV_FAIL,
    HORROR_TV_SUCCESS,
    HORROR_TV_FAIL,
    HORROR_TV_REQUEST,
    ROMANCE_TV_REQUEST,
    ROMANCE_TV_SUCCESS,
    ROMANCE_TV_FAIL,
    DOCUMENTARY_TV_REQUEST,
    DOCUMENTARY_TV_SUCCESS,
    TRENDING_TV_SUCCESS,
    TRENDING_TV_FAIL,
    ORIGINAL_TV_REQUEST,
    ORIGINAL_TV_SUCCESS,
    TOP_RATED_TV_REQUEST,
    ORIGINAL_TV_FAIL,
    TOP_RATED_TV_SUCCESS,
    TOP_RATED_TV_FAIL,
    ACTION_TV_REQUEST,
    ACTION_TV_SUCCESS,
    COMEDY_TV_REQUEST,
    DOCUMENTARY_TV_FAIL,
  } from "../actionTypes";
  
  const initialState = {
    loading: true,
  };
  
  export const trendingVideoReducer = (state = initialState, action) => {
    switch (action.type) {
      case TRENDING_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case TRENDING_SUCCESS:
        return {
          ...state,
  
          trending: action.payload,
          loading: false,
        };
      case TRENDING_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const originalsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ORIGINAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ORIGINAL_SUCCESS:
        return {
          ...state,
          original: action.payload,
          loading: false,
        };
      case ORIGINAL_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const topRatedReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOP_RATED_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case TOP_RATED_SUCCESS:
        return {
          ...state,
          topRated: action.payload,
          loading: false,
        };
      case TOP_RATED_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const comedyReducer = (state = initialState, action) => {
    switch (action.type) {
      case COMEDY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case COMEDY_SUCCESS:
        return {
          ...state,
          comedy: action.payload,
          loading: false,
        };
      case COMEDY_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const horrorReducer = (state = initialState, action) => {
    switch (action.type) {
      case HORROR_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case HORROR_SUCCESS:
        return {
          ...state,
          horror: action.payload,
          loading: false,
        };
      case HORROR_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const romanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case ROMANCE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ROMANCE_SUCCESS:
        return {
          ...state,
          romance: action.payload,
          loading: false,
        };
      case ROMANCE_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const documentaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case DOCUMENTARY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DOCUMENTARY_SUCCESS:
        return {
          ...state,
          documentary: action.payload,
          loading: false,
        };
      case DOCUMENTARY_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const actionVideoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ACTION_MOVIES_SUCCESS:
        return {
          ...state,
          action: action.payload,
          loading: false,
        };
      case ACTION_MOVIES_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const trendingTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case TRENDING_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case TRENDING_TV_SUCCESS:
        return {
          ...state,
  
          trending: action.payload,
          loading: false,
        };
      case TRENDING_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const originalsTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case ORIGINAL_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ORIGINAL_TV_SUCCESS:
        return {
          ...state,
          original: action.payload,
          loading: false,
        };
      case ORIGINAL_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const topRatedTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOP_RATED_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case TOP_RATED_TV_SUCCESS:
        return {
          ...state,
          topRated: action.payload,
          loading: false,
        };
      case TOP_RATED_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const comedyTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case COMEDY_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case COMEDY_TV_SUCCESS:
        return {
          ...state,
          comedy: action.payload,
          loading: false,
        };
      case COMEDY_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const horrorTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case HORROR_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case HORROR_TV_SUCCESS:
        return {
          ...state,
          horror: action.payload,
          loading: false,
        };
      case HORROR_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const romanceTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case ROMANCE_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ROMANCE_TV_SUCCESS:
        return {
          ...state,
          romance: action.payload,
          loading: false,
        };
      case ROMANCE_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const documentaryTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case DOCUMENTARY_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DOCUMENTARY_TV_SUCCESS:
        return {
          ...state,
          documentary: action.payload,
          loading: false,
        };
      case DOCUMENTARY_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const actionTvReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TV_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ACTION_TV_SUCCESS:
        return {
          ...state,
          action: action.payload,
          loading: false,
        };
      case ACTION_TV_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };