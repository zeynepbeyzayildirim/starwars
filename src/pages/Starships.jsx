import * as React from "react";
import axios from "axios";

import { useState } from "react";

import StarShipItem from "../component/StarShipItem";
import Loading from "../component/Loading";

const client = axios.create({
  baseURL: process.env.REACT_APP_STAR_WARS_API,
});

function SearchInput({ setSearchInput }) {
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
    </>
  );
}

export default function Starships() {

  const [pageIndex, setPageIndex] = useState(1);

  var [starShipsList, setStarShipsList] = React.useState([]);
  var [isFirst, setFirst] = React.useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  async function getStarShipsList() {
    setIsLoading(true);

{/*Databasden data çektiğimiz kod*/}
    const response = await client.get(
      `?page=${pageIndex}&search=${searchInput}`
    );
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
{/*Databaseden gelen dataları değikene atıyoruz*/}
    response.data.results.map((it) => {
      starShipsList.push(it);
    });
    setStarShipsList([...starShipsList]);
  }
  {/*Search input değiştikçe sayfaya yeni verileri alıyoruz */}
  React.useEffect(() => {
    if (isFirst) {
      starShipsList = [];
      setPageIndex(1);
      getStarShipsList();
    }
    setFirst(true);
  }, [searchInput]);

{/*Sayfa değiştikce bir sonraki sayfadaki verileri yüklüyoruz */}
  React.useEffect(() => {
    getStarShipsList();
  }, [pageIndex]);

  function LoadMore() {
    return (
      <>
        <div className="flex gap-x-4 items-center ">
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-mono text-black  bg-[#fde61e] rounded-lg border border-black hover:bg-yellow-100"
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
          >
            Load More
          </button>
        </div>
      </>
    );
  }

  function GitHubButton() {
    return (
      <div className="mx-10 rounted-xl ">
        <a href="https://github.com/zeynepbeyzayildirim/starwars">
          <button class="bg-white hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center hover:bg-gray-500 ">
            <img
              class="w-5 h-5 mr-2"
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              alt=""
            ></img>
            <p className="text-black font-mono text-left w-30">gitHub</p>
          </button>
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Header'ın altına search box ve github butonunu ekliyoruz.*/}
      <div className="flex justify-start md:justify-between">
        {/*Search box */}
        <SearchInput
          setSearchInput={(e) => {
            setSearchInput(e);
              {/*search box dan gelen değeri değişkene atıyoruz.*/}
          }}
        />
        {/*Github fonksiyonunu çağırdık*/}
        
        <GitHubButton />
      </div>

      <Loading isLoading={isLoading}>
        <div>
          <div className="grid grid-cols- gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-10">
            {/* Database den gelen veriler burada listelenir */}
            {starShipsList.map((starShip, index) => {
              return (
                <>
                  {/* Gelen datalar Item companentine gönderiliyor. */}
                  <StarShipItem starships={starShip} />
                </>
              );
            })}
            {/* Daha fazla yükle fonksiyonunu çağırıyoruz. */}
            <LoadMore />
          </div>
        </div>
      </Loading>
    </>
  );
}
