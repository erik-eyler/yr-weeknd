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
    <div className="bg-indigo-300 rounded-lg shadow-lg p-1">
      <div className="flex flex-wrap w-1/3 mb-4" >
        <img src={place?.fields?.image} className="rounded-lg shadow" alt="Yr Weeknd" />
      </div>
      <div className="flex mb-4" >
        <h4>Location: {place?.fields?.location}</h4>
      </div>
      <div className="flex flex-wrap mb-4" >
        <h4>Activity: {place?.fields?.activity}</h4>
      </div>
      <div className="flex flex-wrap mb-4" >
        <h4>Length: {place?.fields?.length}</h4>
      </div>
      <div className="flex flex-wrap mb-4" >
        <h4>Rating: {place?.fields?.rating}</h4>
      </div>
      <div className="flex flex-wrap mb-4" >
        <h4>Description: {place?.fields?.description}</h4>
      </div>
      <Link to={`/places/${place.id}/edit`}>Edit</Link>
      <Delete id={place.id} />
    </div>
  )
}
