import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

export const URL = `https://api.airtable.com/v0/${airtableBase}/places`;


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchPlaces = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

export const fetchPlace = async (id) => {
  const res = await axios.get(`${URL}/${id}`, config);
  return res.data;
};

export const deletePlace = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data;
}

const fields = {
  // location,
  // activity,
  // length,
  // rating,
  // description,
};

export const newPlace = async () => {
  const res = await axios.post(`${URL}/`, {fields} , config);
  return res.data;
}