import { useParams } from "react-router";
import * as React from "react";
import axios from "axios";
import ImageLoader from "../component/ImageLoader";
import Loading from "../component/Loading";

{/*Star wars api urlsini .env dosyasından alıyoruz*/}
const client = axios.create({
  baseURL: process.env.REACT_APP_STAR_WARS_API,
});

export default function ShipDetail() {

  {/*img lerin urlsini çekmek için id lerine erişilir */}
  const { id } = useParams();

  var [starShip, setStarShip] = React.useState({});
  var [isLoading, setLoading] = React.useState(true);

  {/*Gemilerin detaylarını çektiğimiz yer*/}
  async function getShipDetail() {
    const response = await client.get(`${id}` + "/");
   {/*Loading başta false geliyor datalar yüklenene kadar*/}
    setLoading(false);
    {/*Gelen dataları setStarshipe atıyoruz.*/}
    setStarShip(response.data);
  }
  {/*Sayfa ilk açıldığında geminin detaylarını çekiyor*/}
  React.useEffect(() => {
    getShipDetail();
  }, []);

  {/*Label function*/}
  function Label({ tittle, data }) {
    return (
      <>
        <p class="mb-3 font-normal font-mono text-gray-700 dark:text-gray-400 ">
          <span className="font-bold">{tittle}:</span> {data}
        </p>
      </>
    );
  }

  return (
    <>
    {/*Sayfayı Loading componenti ile sarmalıyoruz datalar yüklenene kadar loading dönüyor*/}
      <Loading isLoading={isLoading}>
        <div className="flex justify-center ">
          <div class="max-w-lm px-8 bg-transparant rounded-lg shadow-md border-white border-4 border-solid ">
            <div class=" bg-white p-10 mt-8 mb-8  border-black border-2 p-8 rounded-lg border-dotted">
              <h1 class="m-5 text-3xl font-bold tracking-tight font-mono text-gray dark:text-white text-center">
                {starShip.name}
              </h1>
              <div className="bg-gray-300 blur-md invert drop-shadow-xl md:filter-none mb-20 mt-10 shadow-xl shadow-gray-800 rounded-2xl ">
                <ImageLoader
                  url={process.env.REACT_APP_STAR_SHIP_IMAGES_URL + id + ".jpg"}
                ></ImageLoader>
              </div>
              {/*Yorumm satırı*/}
              <Label
                tittle={"Hyperdrive Rating"}
                data={starShip.hyperdrive_rating}
              />
              <Label tittle={"Passengers"} data={starShip.passengers} />
              <Label tittle={"Manufacturer"} data={starShip.manufacturer} />
              <Label
                tittle={"Cost in Credits"}
                data={starShip.cost_in_credits}
              />
              <Label
                tittle={"Max Atmosphering Speed"}
                data={starShip.max_atmosphering_speed}
              />
              <Label tittle={"Cargo Capacity"} data={starShip.cargo_capacity} />
              <Label tittle={"Consumables"} data={starShip.consumables} />
              <Label tittle={"Starship Class"} data={starShip.starship_class} />
            </div>
          </div>
        </div>
      </Loading>
    </>
  );
}
