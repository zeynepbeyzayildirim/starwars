import { useState }  from "react";
import * as React from "react";

export default function ImageLoader({ url }) {

{/*Yıldız gemilerine ait yüklencek resim yoksa veya resim yüklenmediyse error image görünmesi için değiken tanımladık*/}

    const [errorImage,setErrorImage]= useState();
  return (
    <div className="">
      <img className="shadow-gray hover:skew-x-12 h-full w-full object-contain shadow-xl object-cover object-center group-hover:opacity-75 rounded-2xl" 
      alt="img"  src={errorImage == null ?url : errorImage} onError={(e)=>{
        setErrorImage(process.env.REACT_APP_BROKEN_IMAGE_URL);

        {/*.env dosyasından broken img url sini çektik*/}
      }} />
    </div>
  );
}
