export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Location</label>
      <input type="text" value={props.location} onChange={(e) => props.setLocation(e.target.value)} />
      <br />
      <label>Activity</label>
      <input type="text" value={props.activity} onChange={(e) => props.setActivity(e.target.value)} />
      <br />
      <label>Length</label>
      <input type="text" value={props.length} onChange={(e) => props.setLength(e.target.value)} />
      <br />
      <label>Rating</label>
      <input type="text" value={props.rating} onChange={(e) => props.setRating(e.target.value)} />
      <br />
      <label>Description</label>
      <input type="text" value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
      <br />
      <button>{props.type}</button>
    </form>
  )
}
