import axios from "axios";
import React from "react";

const baseURL = "https://swapi.dev/api/starships/9/";

export default function Test() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1 color="white">{post.name}</h1>
      <p color="white">{post.model}</p>
    </div>
  );
}