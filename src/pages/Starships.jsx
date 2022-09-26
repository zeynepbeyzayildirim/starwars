import * as React from "react";
import axios from "axios";

import { useState } from "react";

import StarshipItem from "../component/StarshipItem";

const client = axios.create({
  baseURL: "https://swapi.dev/api/starships/",
});

export default function Starships() {
  const [index, setIndex] = useState(1);

  var [post, setPost] = React.useState([]);
  var [isFirst, setFirst] = React.useState(false);

  const [searchInput, setSearchInput] = useState("");

  async function getPost() {
    const response = await client.get(`?page=${index}&search=${searchInput}`);

    response.data.results.map((it) => {
      post.push(it);
    });
    setPost([...post]);
  }

  React.useEffect(() => {
    if (isFirst) {
      post = [];
      setIndex(1);
      getPost();
    }
    setFirst(true);
  }, [searchInput]);

  React.useEffect(() => {
    getPost();
  }, [index]);

  if (!post) return null;

  return (
    <>
      <form class="flex items-center mb-10">
        <label for="simple-search" class="sr-only h">
          Search
        </label>
        <div class="relative w-100 ml-10 mr-2">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="text-gray-900 text-sm rounded-lg  w-full pl-10 p-2.5 peer outline-none font-mono font-bold"
            placeholder="Search"
            required
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
        <button
          type="submit"
          class="p-2.5 text-sm font-medium text-black bg-[#fde61e] rounded-lg border border-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-black"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>

      <div className="grid grid-cols- gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {post.map((starships, index) => {
          return (
            <>
              <StarshipItem starships={starships} />
            </>
          );
        })}


        <div className="flex items-center justify-center">
          <div className="flex gap-x-4">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-mono text-black 
               bg-[#fde61e] rounded-lg border border-black hover:bg-yellow-100"
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
