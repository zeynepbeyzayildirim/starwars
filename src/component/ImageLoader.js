import { useState }  from "react";
import * as React from "react";

export default function ImageLoader({ url }) {

    const [errorImage,setErrorImage]= useState();
  return (
    <div className="">
      <img className="shadow-gray hover:skew-x-12 h-full w-full object-contain shadow-xl object-cover object-center group-hover:opacity-75 rounded-2xl" alt=""  src={errorImage == null ?url : errorImage} onError={(e)=>{
        setErrorImage(process.env.REACT_APP_BROKEN_IMAGE_URL);
      }} />
    </div>
  );
}