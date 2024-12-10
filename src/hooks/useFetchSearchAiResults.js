import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setSearchQuery,
  setSearchResults,
} from "../store/reducers/searchSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";

const useFetchSearchAiResults = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.search.searchQuery);

  const fetchMoviesData = async (movieName) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await res.json();

      return data;
    } catch (error) {
      console.log("Search movies data error: ", error);
    }
  };

  const getSearchHandler = async () => {
    try {
      dispatch(setLoading(true));

      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Provide a comma-separated list of six movie names related to '${searchQuery}' as a list, returning only their titles without any additional information. If the query is not related to movies, return 'This model is only compatible with movie searches.'`;

      const aiResult = await model.generateContent(prompt);
      const aiTextResult = aiResult.response.text();
      const movieNames = aiTextResult.split(", ");

      if (
        aiTextResult.trim() ===
        "This model is only compatible with movie searches."
      ) {
        dispatch(setError(aiTextResult));
      } else {
        const fetchedData = movieNames?.map(fetchMoviesData);
        const resolvedMoviesData = await Promise.allSettled(fetchedData);

        dispatch(setError(null));
        dispatch(setSearchResults(resolvedMoviesData));
      }
    } catch (error) {
      console.error("Error in fetching AI search results:", error);
    } finally {
      dispatch(setSearchQuery("")); // Reset the search query
      dispatch(setLoading(false)); // Stop loading
    }
  };

  return getSearchHandler;
};

export default useFetchSearchAiResults;
