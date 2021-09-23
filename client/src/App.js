import './App.css';
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import List from "./components/List";
import Random from './components/Random';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <div>Home</div>
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
      <Route path="/random">
        <Random />
      </Route>
    </div>
  );
}

export default App;
