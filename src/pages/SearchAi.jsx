import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";

const SearchAi = () => {
  const [searchQuery, setSetQuery] = useState("");
  const query = "I wanna watch a movie which has dark romance and some adventure, thrill";

  async function getSearchHandler() {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give me five movies names on the bases of this query(${query}) make sure i want only Name`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  }

  useEffect(() => {
    getSearchHandler();
  }, []);

  return <>
  <main className="w-full h-screen bg-zinc-950 flex flex-col items-center justify-center gap-5">
    <h1 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-red-600">Currently this feature is in Development mode</h1>
    <Link to={"/browse"} className="bg-zinc-800 text-white text-sm font-semibold py-3 px-6 rounded-lg hover:bg-zinc-700 duration-300">Back to Homepage</Link>
  </main>
  </>;
};

export default SearchAi;
