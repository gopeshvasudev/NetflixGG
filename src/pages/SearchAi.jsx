import { GoogleGenerativeAI } from "@google/generative-ai";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setLoading } from "../store/reducers/searchSlice";

const SearchAi = () => {
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const loading = useSelector((store) => store.search.loading);
  const dispatch = useDispatch();

  async function getSearchHandler() {
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Provide the names of five movies related to '${searchQuery}' as a list, returning only their titles without any additional information.`;

      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      console.log("search ai page error", error);
    } finally {
      dispatch(setSearchQuery(""));
      dispatch(setLoading());
    }
  }

  const searchQueryHandler = () => {
    getSearchHandler();
  };

  return (
    <>
      <main className="w-full h-screen bg-[url(../hero.jpg)] text-white">
        <section className="w-full h-full bg-black/60 flex flex-col items-center justify-center gap-2 px-2">
          <div className="flex items-center w-full md:w-[600px] 2xl:w-[1000px] overflow-hidden rounded-xl bg-black/70 px-3 py-3">
            <input
              type="search"
              className="w-full font-medium outline-none resize-none bg-transparent pr-3"
              placeholder="Ask your questions?"
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              value={searchQuery}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchQueryHandler();
                }
              }}
            />

            <button
              className="p-2 text-2xl text-red-200 bg-zinc-800 hover:bg-zinc-900 duration-300 rounded-xl"
              onClick={searchQueryHandler}
            >
              <IoSearch />
            </button>
          </div>

          <div className="results-container w-full md:w-[600px] 2xl:w-[1000px] 2xl:h-[600px] h-96 bg-zinc-900 rounded-xl p-2">
            {loading && <h1 className="text-xl font-medium">...</h1>}
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchAi;
