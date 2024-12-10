import React from "react";

const SearchLoader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <video
        src="../../loading_ani.webm"
        className="w-48 opacity-30"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default SearchLoader;
