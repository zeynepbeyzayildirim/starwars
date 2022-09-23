import { useParams} from "react-router";

export default function ShipDetail() {
  const {params} = useParams();
 
  return <>
  <div className="container bg-color:white">
  {
    params?.map((ships)=>{
    return(
        <div>
        <h1>{params} </h1>
        </div>
    )}
    )
  }
 
  </div>
  
 </>;
}
