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
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
      {places.map((place) => {
        return (
          <Link to={`/places/${place.id}`} key={place.id}>
            <h3>{place.fields.location}</h3>
          </Link>
        );
      })}
      </div>
    </div>
  )
}
