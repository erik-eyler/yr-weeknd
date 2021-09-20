import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPlaces } from "../services";

export default function List() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const getPlaces = async () => {
      setPlaces(await fetchPlaces());
    };
    getPlaces();
  }, []);

  return (
    <div>
      {places.map((place) => {
        return (
          <Link to={`/places/${place.id}`} key={place.id}>
            <h3>{place.fields.location}</h3>
          </Link>
        );
      })}
    </div>
  )
}
