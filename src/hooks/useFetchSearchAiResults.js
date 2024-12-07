import { useDispatch, useSelector } from "react-redux";
import { setLoading, setSearchQuery } from "../store/reducers/searchSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useFetchSearchAiResults = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.search.searchQuery);

  async function getSearchHandler() {
    try {
      dispatch(setLoading(true));
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Provide an comma seperated names of five movies related to '${searchQuery}' as a list, returning only their titles without any additional information. Ensure that if any query will came which is not related to movies just simple return 'This model is only compatible with movies searches'`;

      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      console.log("search ai page error", error);
    } finally {
      dispatch(setSearchQuery(""));
      dispatch(setLoading(false));
    }
  }

  return getSearchHandler;
};

export default useFetchSearchAiResults;
