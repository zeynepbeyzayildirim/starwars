import  { useParams} from "react-router";
import * as React from "react";
import axios from "axios";
import MyImage from "../component/MyImage";

const client = axios.create({
  baseURL: "https://swapi.dev/api/starships/",
});

export default function ShipDetail() {
  const { id } = useParams();

  const imgUrl="https://starwars-visualguide.com/assets/img/starships/";


  const [errorImage,setErrorImage]= React.useState();



  var [post, setPost] = React.useState([id]);

  async function getPost() {
    const response = await client.get(`${id}` + "/");

    setPost(response.data);
  }

  React.useEffect(() => {
    getPost();
  });

  if (!post) return null;

  


  return (
    <>
      <div className="flex justify-center">
        <div class="max-w-sm bg-white rounded-lg border border-gray-500 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
          <div class="p-5">
        
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.name} 
              </h5>
              <MyImage url={imgUrl+id+".jpg"}></MyImage>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Model: {post.model}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Model: {post.hyperdrive_rating}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Model: {post.passengers}
            </p>
             
           
       
          </div>
        </div>
      </div>
    </>
  );
}
