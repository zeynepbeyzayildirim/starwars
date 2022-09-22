import * as React from "react";
import axios from "axios";
import MyImage from "./MyImage";
import { useState } from "react";

const client = axios.create({
  baseURL: "https://swapi.dev/api/starships/",
});

export default function StarshipList() {
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    async function getPost() {
      const response = await client.get();
      setPost(response.data.results);
    }
    getPost();
  }, []);

  if (!post) return null;


  return (
    <>
      <div className="grid grid-cols- gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {post.map((it) => {
          return (
            <>
            <div className="bg-transparant">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">StarshipList</h2>

                  <a key={it.id} href={it.href} className="group">
                
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                     <div class="max-w-sm rounded overflow-hidden shadow-lg">
                     <MyImage url={
                          "https://starwars-visualguide.com/assets/img/starships/" +
                          it.url.split("/")[it.url.split("/").length - 2] +
                          ".jpg"
                        }/>
                    
                     </div>
                     
                    </div>
                    <h3 className="mt-4 text-sm text-white">{it.name}</h3>
                    <p className="mt-1 text-lg font-medium text-white">
                      {it.model}
                    </p>
                  </a>
                </div>
               
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
