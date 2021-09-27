import './App.css';
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import List from "./components/List";
// import Random from './components/Random';
import { Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <div className="py-10">
        <button className="w-40 h-20 bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2 px-3 rounded"><Link to="/places">Browse Places</Link></button>

        </div>
      </Route>
      <Route exact path="/places">
        <List />
      </Route>
      <Route exact path="/places/:id">
        <Details />
      </Route>
      <Route path="/new">
        <Create />
      </Route>
      <Route exact path="/places/:id/edit">
        <Edit />
      </Route>
      {/* <Route path="/random">
        <Random />
      </Route> */}
    </div>
  );
}

export default App;
