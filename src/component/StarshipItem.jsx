import { NavLink } from "react-router-dom";
import MyImage from "./MyImage";

export default function StarshipItem({ starships }) {
  return (
    <>
      <div className="bg-transparant rounded-2xl my-auto mx-auto border-double border-2 border-[#fde61e] hover:border-dashed">
        <NavLink key={starships.id} to={"/starship/"+ starships.url.split("/")[
                      starships.url.split("/").length - 2
                    ]} 
                    className="group">
          <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-xl lg:px-8">
           
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-700 xl:aspect-w-7 xl:aspect-h-8">
              <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <MyImage
                  url={
                    "https://starwars-visualguide.com/assets/img/starships/" +
                    starships.url.split("/")[
                      starships.url.split("/").length - 2
                    ] +
                    ".jpg"
                  }
                />
              </div>
            </div>
            <h3 className="mt-4 line-clamp-1 text-lg hover:text-lg text-center text-white font-mono font-bold">{starships.name}</h3>
            <p className="mt-1 line-clamp-1 hover:text-md text-md font-medium text-white font-mono text-center">
              {starships.model}
            </p>
            <div className=" bg-[#fde61e]">
            <p className="mt-1 text-sm font-medium text-black font-mono  font-bold text-center">
            <span>
              Hyper-drive Rating: 
            </span>  {starships.hyperdrive_rating}
            </p>
            </div>
           
          </div>
        </NavLink>
      </div>
    </>
  );
}
