import { NavLink } from "react-router-dom";
import MyImage from "./MyImage";

export default function StarshipItem({ starships }) {
  return (
    <>
      <div className="bg-transparant">
        <NavLink key={starships.id} to={"/starship/"+ starships.url.split("/")[
                      starships.url.split("/").length - 2
                    ]} className="group">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only text-white">StarshipList</h2>

            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
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
            <h3 className="mt-4 text-sm text-white">{starships.name}</h3>
            <p className="mt-1 text-lg font-medium text-white">
              {starships.model}
            </p>
            <p className="mt-1 text-lg font-medium text-white">
              {starships.hyperdrive_rating}
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
}
