import { NavLink } from "react-router-dom";
import ImageLoader from "./ImageLoader";
export default function StarShipItem({ starships }) {
  return (
    <>
      <div className="bg-transparant rounded-2xl my-auto mx-auto border-double border-2 border-[#fde61e] hover:border-dashed">
        {/*Geçerli URL ile eşleştiğinde, render edilmiş elemente css ekler.*/}
        <NavLink
          key={starships.id}
          to={
            "/starship/" +
            starships.url.split("/")[starships.url.split("/").length - 2]
          }
          className="group"
        >
          <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-xl lg:px-8">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-400 xl:aspect-w-7 xl:aspect-h-8">
              <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                {/* Yıldız gemilerinin fotoğraflarının geldiği compopnentte .env dostasından eriştiğiöiz STAR_SHIP_IMAGES_URL sini
              split yardımı ile '/' karakterlerine göre parçalıyoruz ve son gelen değeri alıyoruz*/}
                <ImageLoader
                  url={
                    process.env.REACT_APP_STAR_SHIP_IMAGES_URL +
                    starships.url.split("/")[
                      starships.url.split("/").length - 2
                    ] +
                    ".jpg"
                  }
                />
              </div>
            </div>
            {/*Başık texti */}
            <h3 className="mt-4 line-clamp-1 text-xl hover:text-md text-center text-black font-mono font-bold shadow-sm shadow-gray-500 bg-white bg-opacity-80 rounded-lg p-1">
              {starships.name}
            </h3>
            {/*Model texti */}
            <p className="mt-2 mb-2 line-clamp-1 hover:text-md text-md font-normal text-white font-mono text-center">
              {starships.model}
            </p>
            {/*Hypedrive rating texti */}
            <div className="bg-[#fde61e] shadow-md shadow-gray-800 rounded-2xl">
              <p className="mt-1 text-sm font-medium text-black font-mono font-bold text-center">
                <span>Hyper-drive Rating:</span> {starships.hyperdrive_rating}
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
