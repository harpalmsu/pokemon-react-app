import "./App.css";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Pokemon</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/" exact component={Pokemon} />
          <Route path="/pokemon?:pokemonId" component={PokemonDetails} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
      {/* <Posts /> */}
    </div>
  );
}

export default App;
