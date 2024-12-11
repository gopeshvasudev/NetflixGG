import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/reducers/searchSlice";
import useFetchSearchAiResults from "../hooks/useFetchSearchAiResults";
import SearchLoader from "../components/SearchLoader";
import SearchResultCard from "../components/SearchResultCard";
import { Link } from "react-router-dom";

const SearchAi = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.search.loading);
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const searchResults = useSelector((store) => store.search.searchResults);
  const searchError = useSelector((store) => store.search.error);
  const searchAiResultsHook = useFetchSearchAiResults();

  const searchQueryHandler = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a valid search query.");
      return;
    }
    searchAiResultsHook();
  };

  return (
    <main className="w-full h-screen bg-[url(../hero.jpg)] text-white">
      <section className="w-full h-full bg-black/60 flex flex-col items-center justify-end 2xl:justify-center gap-2 px-2 pb-5">
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

        <div className="results-container w-full md:w-[600px] 2xl:w-[1000px] 2xl:h-[600px] h-[70%] bg-zinc-900 rounded-xl p-2">
          {loading ? (
            <SearchLoader />
          ) : (
            <div className="search-results w-full h-full overflow-y-auto flex flex-wrap justify-evenly gap-y-2">
              {searchError ? (
                <h2>{searchError}</h2>
              ) : (
                searchResults?.map((result) => (
                  <Link
                    key={result?.value?.results[0]?.id || Math.random()} // Fallback for key if id is missing
                    to={`/movie/${result?.value?.results[0]?.id}`}
                  >
                    <SearchResultCard data={result?.value?.results[0]} />
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default SearchAi;
