import React from "react";
import { useHistory } from "react-router";
import { deletePlace } from "../services";

export default function Delete(props) {
  const history = useHistory();
  const handleDelete = async () => {
    await deletePlace(props.id);
    history.push("/places");
  }
  return (
    <div>
      <button onClick={handleDelete} className="bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2 px-3 rounded">Delete</button>
    </div>
  )
}
