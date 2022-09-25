import { useState }  from "react";
import * as React from "react";

export default function MyImage({ url }) {

    const [errorImage,setErrorImage]= useState();
  return (
    <div className="shadow-xl shadow-indigo-500/40 hover:skew-x-12 rounded-2xl">
      <img className="h-full w-full object-contain  object-cover object-center group-hover:opacity-75 rounded-2xl" alt=""  src={errorImage == null ?url : errorImage} onError={(e)=>{
        setErrorImage("https://ps.w.org/replace-broken-images/assets/icon-256x256.png?rev=2561727");
      }} />
    </div>
  );
}
