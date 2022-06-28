import axios from "axios";
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
  
  const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
    })
  
  const API_KEY = '143d8b8fb24e648fe921adc63cfb0c67';
  
  const fetchTrending = `/trending/movie/week?api_key=${API_KEY}&language=en-US`;
  const fetchNetflixOriginals = `/discover/movie?api_key=${API_KEY}&with_network=123`;
  const fetchTopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
  const fetchActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
  const fetchComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
  const fetchHorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
  const fetchRomanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
  const fetchDocumentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
  
  const fetchTrendingTv = `/trending/tv/week?api_key=${API_KEY}&language=en-US`;
  const fetchNetflixOriginalsTv = `/discover/tv?api_key=${API_KEY}&with_network=123`;
  const fetchTopRatedTv = `/tv/top_rated?api_key=${API_KEY}&language=en-US`;
  const fetchActionTv = `/discover/tv?api_key=${API_KEY}&with_genres=28`;
  const fetchComedyTv = `/discover/tv?api_key=${API_KEY}&with_genres=35`;
  const fetchHorrorTv = `/discover/tv?api_key=${API_KEY}&with_genres=27`;
  const fetchRomanceTv = `/discover/tv?api_key=${API_KEY}&with_genres=10749`;
  const fetchDocumentaryTv = `/discover/tv?api_key=${API_KEY}&with_genres=99`;
  
  export const getPopularData = (page) => async (dispatch) => {
    try {
      dispatch({
        type: TRENDING_REQUEST,
      });

      
  
      const { data } = await instance.get(fetchTrending, {
        params: {
          page: page,
        },
      });

      
  
      dispatch({
        type: TRENDING_SUCCESS,
        payload: data,
      });

      
    } catch (err) {
      dispatch({
        type: TRENDING_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getOriginals = (page) => async (dispatch) => {
    try {
      dispatch({
        type: ORIGINAL_REQUEST,
      });
  
      const { data } = await instance.get(fetchNetflixOriginals, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: ORIGINAL_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ORIGINAL_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getTopRated = (page) => async (dispatch) => {
    try {
      dispatch({
        type: TOP_RATED_REQUEST,
      });
  
      const { data } = await instance.get(fetchTopRated, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: TOP_RATED_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TOP_RATED_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getActionMovies = (page) => async (dispatch) => {
    try {
      dispatch({
        type: ACTION_MOVIES_REQUEST,
      });
  
      const { data } = await instance.get(fetchActionMovies, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: ACTION_MOVIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ACTION_MOVIES_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getComedyMovies = (page) => async (dispatch) => {
    try {
      dispatch({
        type: COMEDY_REQUEST,
      });
  
      const { data } = await instance.get(fetchComedyMovies, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: COMEDY_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: COMEDY_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getHorrorMovies = (page) => async (dispatch) => {
    try {
      dispatch({
        type: HORROR_REQUEST,
      });
  
      const { data } = await instance.get(fetchHorrorMovies, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: HORROR_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: HORROR_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getRomanceMovies = (page) => async (dispatch) => {
    try {
      dispatch({
        type: ROMANCE_REQUEST,
      });
  
      const { data } = await instance.get(fetchRomanceMovies, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: ROMANCE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ROMANCE_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getDocumentaries = (page) => async (dispatch) => {
    try {
      dispatch({
        type: DOCUMENTARY_REQUEST,
      });
  
      const { data } = await instance.get(fetchDocumentaries, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: DOCUMENTARY_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: DOCUMENTARY_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getPopularTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: TRENDING_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchTrendingTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: TRENDING_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TRENDING_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getOriginalsTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: ORIGINAL_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchNetflixOriginalsTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: ORIGINAL_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ORIGINAL_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getTopRatedTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: TOP_RATED_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchTopRatedTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: TOP_RATED_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TOP_RATED_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getActionTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: ACTION_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchActionTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: ACTION_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ACTION_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getComedyTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: COMEDY_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchComedyTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: COMEDY_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: COMEDY_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getHorrorTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: HORROR_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchHorrorTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: HORROR_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: HORROR_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getRomanceTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: ROMANCE_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchRomanceTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: ROMANCE_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ROMANCE_TV_FAIL,
        payload: err.message,
      });
    }
  };
  
  export const getDocumentariesTv = (page) => async (dispatch) => {
    try {
      dispatch({
        type: DOCUMENTARY_TV_REQUEST,
      });
  
      const { data } = await instance.get(fetchDocumentaryTv, {
        params: {
          page: page,
        },
      });
  
      dispatch({
        type: DOCUMENTARY_TV_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: DOCUMENTARY_TV_FAIL,
        payload: err.message,
      });
    }
  };