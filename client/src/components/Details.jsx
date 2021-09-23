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
    <div>
      <h4>Location: {place?.fields?.location}</h4>
      <h4>Activity: {place?.fields?.activity}</h4>
      <h4>Length: {place?.fields?.length}</h4>
      <h4>Rating: {place?.fields?.rating}</h4>
      <h4>Description: {place?.fields?.description}</h4>
      <img src={place?.fields?.image} alt="Yr Weeknd"/>
      <Link to={`/places/${place.id}/edit`}>Edit</Link>
      <Delete id={place.id} />
    </div>
  )
}
