// css
import "./Pokemon.css";
import { useRouteMatch, useParams } from "react-router-dom";

// react dependencies
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// constants
import * as Constants from "../../constants";

// components
import PokemonDetail from "../PokemonDetails";
import Pagination from "../Pagination";

import { Container } from "react-bootstrap";
import axios from "axios";

const Pokemon = (props) => {
  const match = useRouteMatch();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  console.log("1 match", match);
  console.log("2", params);
  let { pagen } = useParams();
  console.log("3", pagen);
  const [allPokemons, setAllPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const eachPokemonDetailsPromise = (allDetails) => {
    const promiseArray = allDetails.map((item) => {
      return fetch(item.url).then((res) => res.json());
    });
    return Promise.all(promiseArray).then((res) => res);
  };

  useEffect(() => {
    const getPokemonDetails = async () => {
      setLoading(true);
      const poke_data = await axios.get(Constants.pokemonApi);
      console.log("1111", poke_data.data.results);
      setAllPokemons(poke_data.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    getPokemonDetails();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allPokemons.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const paginate = (pagenum) => setCurrentPage(pagenum);

  const pokemonList = currentRecords.map((item) => {
    return (
      <li key={item.name}>
        <Link to="/pokemon/" params={item.url}>
          {item.name}
        </Link>
      </li>
    );
  });

  if (loading) {
    return <h2>Loading......</h2>;
  }

  return (
    <div>
      <div className="container">
        <ul>{pokemonList}</ul>
        <Pagination
          paginate={paginate}
          postsPerPage={recordsPerPage}
          totalPosts={allPokemons.length}
        />
      </div>
    </div>
  );
};
export default Pokemon;
