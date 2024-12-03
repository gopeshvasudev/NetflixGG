import React, { useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SearchAi = () => {
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

  return <div>SearchAi</div>;
};

export default SearchAi;
