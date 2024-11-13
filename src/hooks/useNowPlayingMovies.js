import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/reducers/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

    const res = await fetch(url, API_OPTIONS);
    const data = await res.json();

    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useNowPlayingMovies;
