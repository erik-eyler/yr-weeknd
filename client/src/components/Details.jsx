import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchPlace } from "../services";
import { Link } from "react-router-dom";
import Delete from "./Delete";

export default function Details() {
  const [place, setPlace] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getPlace = async () => {
      setPlace(await fetchPlace(id));
    }
    getPlace();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white w-screen h-screen flex flex-row flex-wrap p-1">
      <div className="mx-auto w-2/3">
        <div className="bg-indigo-300 rounded-lg shadow-lg w-full flex flex-row flex-wrap p-1">

        <div className="md:w-1/3 w-full" >
          <img src={place?.fields?.image} className="h-full rounded-lg shadow" alt="Yr Weeknd" />
        </div>
        <div className="md:w-2/3 w-full px-4 flex flex-row flex-wrap">
          <div className="mb-2 uppercase text-md text-grey-darkest text-left font-mono" >
            <p>Location: {place?.fields?.location}</p>
            <p>Activity: {place?.fields?.activity}</p>
            <p>Length: {place?.fields?.length}</p>
            <p>Rating: {place?.fields?.rating}</p>
            <p>Description: {place?.fields?.description}</p>
            <div className="flex justify-center">
            <button className="bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2 px-3 rounded"><Link to={`/places/${place.id}/edit`} >Edit</Link></button>
            <Delete id={place.id} />
            </div>
            </div>

        </div>

          </div>
      </div>
    </div>
  )
}
