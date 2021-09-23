import { useState } from "react";
import { useHistory } from "react-router";
// import { newPlace } from "../services";
import Form from "./Form";
import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

export const URL = `https://api.airtable.com/v0/${airtableBase}/places`;


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Create() {
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [length, setLength] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      location,
      activity,
      length,
      rating,
      description,
    };
    const res = await axios.post(URL, { fields }, config);
    history.push(`/places/${res.data.id}`)
    // useEffect(() => {
    //   const getNewPlace = async () => {
    //     setNewPlace(await newPlace());
    //   };
    //   getNewPlace();
    // }, [])
  };

  return (
    <div>
      <h3>Create a new destination</h3>
      <Form
        location={location}
        setLocation={setLocation}
        activity={activity}
        setActivity={setActivity}
        length={length}
        setLength={setLength}
        rating={rating}
        setRating={setRating}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        type={"Submit"} />
    </div>
  )
}
