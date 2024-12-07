import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { IoSearch } from "react-icons/io5";

const SearchAi = () => {
  const [searchQuery, setSearchQuery] = useState("");

  async function getSearchHandler() {
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Give me five movies names on the bases of this query(${searchQuery}) make sure i want only Name`;

      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      console.log("search ai page error", error);
    } finally {
      setSearchQuery("");
    }
  }

  const searchQueryHandler = () => {
    getSearchHandler();
  };

  return (
    <>
      <main className="w-full h-screen bg-[url(../hero.jpg)] text-white">
        <section className="w-full h-full bg-black/70 flex flex-col items-center justify-center px-2">
          <div className="flex items-center w-full md:w-[600px] overflow-hidden rounded-lg bg-black/70 px-3 py-3">
            <textarea
              className="w-full font-medium outline-none resize-none bg-transparent"
              rows="1"
              placeholder="Ask your questions?"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            ></textarea>

            <button
              className="p-2 text-2xl text-red-200 hover:bg-zinc-900 duration-300 rounded-full"
              onClick={searchQueryHandler}
            >
              <IoSearch />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchAi;
