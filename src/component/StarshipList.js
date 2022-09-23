import * as React from "react";
import axios from "axios";
import MyImage from "./MyImage";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const client = axios.create({
  baseURL: "https://swapi.dev/api/starships/",
});



export default function StarshipList() {

  const [index, setIndex] = useState(1);

  const [post, setPost] = React.useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  async function getPost() {

    const response = await client.get("?page=" + index);
  
    response.data.results.map(it=>{

      post.push(it);
    })
    setPost([...post]);
  }

  React.useEffect(() => {
    getPost();
  }, [index]);

  if (!post) return null;

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = post.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(post)
    }
}
  

  return (
    <>
      <div style={{ padding: 10 }}>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            /></div>
             {searchInput.length > 1 ? (
              filteredResults.map((item) => {
               return (
                <div className="container">
                  <h1>{item.name}</h1>
                </div>
               );
             })):
           
      <div className="grid grid-cols- gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        { post?.map((starships) => {

          return (
            <>
   
              <div className="bg-transparant">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only text-white">StarshipList</h2>
                
                  <a key={starships.id} href={starships.href} className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <MyImage
                          url={
                            "https://starwars-visualguide.com/assets/img/starships/" +
                            starships.url.split("/")[
                              starships.url.split("/").length - 2
                            ] +
                            ".jpg"
                          }
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 text-sm text-white">
                      {starships.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-white">
                      {starships.model}
                    </p>
                  </a>
                </div>
              </div>
            </>
          );
        })
        }
        <div className="flex items-center justify-center h-screen ">
          <div className="flex gap-x-4">
          <button 
          type="button" 
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => {
            
            setIndex(index + 1);
          
          }}

          >Load More</button>
          </div>
        </div>
     
   
       
      </div>
             }       
    </>

  );
}