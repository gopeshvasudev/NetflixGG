import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  document.title = "Netflix | Error";
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <main className="w-full h-screen text-white bg-zinc-950 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-red-600">{status}</h1>
      <h2 className="text-7xl font-bold">{statusText}</h2>
      <Link className="p-3 bg-zinc-800 rounded-md mt-10 hover:bg-zinc-900 font-semibold" to={"/browse"}>Back to Homepage</Link>
    </main>
  );
};

export default Error;
