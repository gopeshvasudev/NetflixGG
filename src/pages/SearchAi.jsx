import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/reducers/searchSlice";
import useFetchSearchAiResults from "../hooks/useFetchSearchAiResults";

const SearchAi = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.search.loading);
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const searchAiResultsHook = useFetchSearchAiResults();

  const searchQueryHandler = () => {
    searchAiResultsHook();
  };

  return (
    <>
      <main className="w-full h-screen bg-[url(../hero.jpg)] text-white">
        <section className="w-full h-full bg-black/60 flex flex-col items-center justify-end lg:justify-center gap-2 px-2 pb-5">
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
            {loading && (
              <div className="w-full h-full flex items-center justify-center">
                <video
                  src="../../loading_ani.webm"
                  className="w-48 opacity-30"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchAi;
