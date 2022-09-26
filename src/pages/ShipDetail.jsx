import { useParams } from "react-router";
import * as React from "react";
import axios from "axios";
import MyImage from "../component/MyImage";
import { Card } from "@material-tailwind/react";

const client = axios.create({
  baseURL: "https://swapi.dev/api/starships/",
});

export default function ShipDetail() {
  const { id } = useParams();

  const imgUrl = "https://starwars-visualguide.com/assets/img/starships/";

 

  var [post, setPost] = React.useState([id]);

  async function getPost() {
    const response = await client.get(`${id}`+"/");

    setPost(response.data);
  }

  React.useEffect(() => {
    getPost();
  });

  if (!post) return null;

  return (
    <>
    
      <div className="flex justify-center ">
      
      <div class="max-w-lm px-8 bg-transparant rounded-lg shadow-md border-white border-4 border-solid ">
          <div class=" bg-white p-10 mt-8 mb-8  border-black border-2 p-8 rounded-lg border-dotted">
            <h1 class="m-5 text-3xl font-bold tracking-tight font-mono text-gray dark:text-white text-center">
              {post.name}
            </h1>
            <div className="bg-gray-300 blur-md invert drop-shadow-xl md:filter-none mb-20 mt-10 shadow-xl shadow-gray-800 rounded-2xl ">
              <MyImage url={imgUrl + id + ".jpg"}></MyImage>
            </div>
         
            <p class="mb-3 font-normal font-mono text-gray-700 dark:text-gray-400 ">
            <span className="font-bold">Model:</span> {post.model}
            </p>
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Hyperdrive Rating:</span> {post.hyperdrive_rating}
            </p>
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Passengers</span>: {post.passengers}
            </p> 
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Manufacturer</span>: {post.manufacturer}
            </p> 
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Cost in Credits</span>: {post.cost_in_credits}
            </p> 
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Max Atmosphering Speed</span>: {post.max_atmosphering_speed}
            </p> 
             <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Cargo Capacity</span>: {post.cargo_capacity}
            </p> 
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Consumables</span>: {post.consumables}
            </p>
            <p class="mb-3 font-normal  font-mono text text-gray-700 dark:text-gray-400">
              <span className="font-bold">Starship Class</span>: {post.starship_class}
            </p>
           
          </div>
        </div>
      </div>
      

    </>
  );
}
