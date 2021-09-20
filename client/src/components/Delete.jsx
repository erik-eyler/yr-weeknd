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
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
