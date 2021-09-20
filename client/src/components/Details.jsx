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
      <h4>{place?.fields?.location}</h4>
      <h4>{place?.fields?.activity}</h4>
      <h4>{place?.fields?.length}</h4>
      <h4>{place?.fields?.rating}</h4>
      <h4>{place?.fields?.description}</h4>
      <Link to={`/places/${place.id}/edit`}>Edit</Link>
      <Delete id={place.id} />
    </div>
  )
}
