import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
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

export default function Edit() {
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [length, setLength] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchPlace = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      const { fields } = res.data;
      setLocation(fields.location);
      setActivity(fields.activity);
      setLength(fields.length);
      setRating(fields.rating);
      setDescription(fields.description);
      setImage(fields.image);
    };
    fetchPlace();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      location,
      activity,
      length,
      rating,
      description,
      image,
    };
    const res = await axios.put(`${URL}/${id}`, { fields }, config);
    history.push(`/places/${res.data.id}`);
  };

  return (
    <div>
      <h4>Submit Edit</h4>
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
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
        type={"Edit"}
      />
    </div>
  );
}
