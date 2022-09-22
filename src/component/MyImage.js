import { useState }  from "react";
import * as React from "react";

export default function MyImage({ url }) {

    const [errorImage,setErrorImage]= useState();
  return (
    <>
  
  
      <img className="h-full w-full object-contain  object-cover object-center group-hover:opacity-75" alt=""  src={errorImage == null ?url : errorImage} onError={(e)=>{
        setErrorImage("https://ps.w.org/replace-broken-images/assets/icon-256x256.png?rev=2561727");
      }} />
    </>
  );
}
