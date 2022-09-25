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

  React.useEffect(()=>{

    if(isFirst)
    {
        post=[];
        setIndex(1);
        getPost();
    }
    setFirst(true);
  
  },[searchInput])

  React.useEffect(() => {
    getPost();
  }, [index]);

  if (!post) return null;

  return (
    <>
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full ml-10">
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-4 mr-12 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          <span class="sr-only">Search</span>
        </button>
      </form>

      <div className="grid grid-cols- gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {post.map((starships, index) => {
            return (
              <>
                <StarshipItem starships={starships}/>
              </>
            );
          })}
        <div className="flex items-center justify-center h-screen ">
          <div className="flex gap-x-4">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
