import { useParams, } from "react-router";
import * as React from "react";
import axios from "axios";

import { useState } from "react";

const client = axios.create({
    baseURL: "https://swapi.dev/api/starships/",
  });

  
export default function ShipDetail() {
  const { id } = useParams();
  

  var [post, setPost] = React.useState([id]);


  async function getPost() {
    const response = await client.get(`${id}` + "/");
 
    setPost(response.data);
  }

  React.useEffect(() => {
    getPost();
  },);

  if (!post) return null;
 
  return <>
  
  <div className="container bg-color:white">
  {

  <h1>

{post.name}
</h1>
  }
 
  </div>
  
 </>;
}
