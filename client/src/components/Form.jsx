export default function Form(props) {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-indigo-300">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
      <form onSubmit={props.handleSubmit}>
        <div className="flex flex-col mb-4" >
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Location</label>
        <input className="border py-2 px-3 text-grey-darkest" type="text" value={props.location} onChange={(e) => props.setLocation(e.target.value)} />
        <br />
        </div>
        <div className="flex flex-col mb-4">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Activity</label>
        <input className="border py-2 px-3 text-grey-darkest" type="text" value={props.activity} onChange={(e) => props.setActivity(e.target.value)} />
        <br />
        </div>
        <div className="flex flex-col mb-4">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Length</label>
        <input className="border py-2 px-3 text-grey-darkest" type="text" value={props.length} onChange={(e) => props.setLength(e.target.value)} />
        <br />
        </div>
        <div className="flex flex-col mb-4">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Rating</label>
        <input className="border py-2 px-3 text-grey-darkest" type="text" value={props.rating} onChange={(e) => props.setRating(e.target.value)} />
        <br />
        </div>
        <div className="flex flex-col mb-4">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Description</label>
        <input className="border py-2 px-3 text-grey-darkest" type="text" value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
        <br />
        </div>
        
        <button>{props.type}</button>
        </form>
      </div>
    </div>
  )
}
