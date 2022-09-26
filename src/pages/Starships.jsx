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

  const [isLoading, setIsLoading] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  async function getPost() {
    setIsLoading(true);

    const response = await client.get(`?page=${index}&search=${searchInput}`);
    setTimeout(function() {
      setIsLoading(false);
    }, 1000);
  
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
    {isLoading ? <div className="flex justify-center" role="status">
    <svg aria-hidden="true" class="mr-2 w-40 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-[#fde61e]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
: <div>
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
</div>
    }
    </>
  );
}
