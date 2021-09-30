import { useEffect, useState, useRef } from "react";
import "./pokemon.css";
import PokemonDetail from "../pokemonDetails/pokemonDetails";
const Pokemon = () => {
  const divText = useRef();
  const pokemonapi = "https://pokeapi.co/api/v2/pokemon";
  const [allPokemons, setAllPokemons] = useState([]);
  const navOption = useRef();
  const [page, setPage] = useState(0);
  const [prev, setPrev] = useState(false);
  const [offset, setOffset] = useState(0);
  const pageLimit = 20;
  useEffect(() => {
    console.log("new offest", offset);
    let url = `${pokemonapi}?limit=${pageLimit}&offset=${offset}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);

        setAllPokemons(res.results);
      });
  }, [page]);
  const renderPokemon = allPokemons.map((item) => {
    return <PokemonDetail key={item.name} pokemonDetails={item} />;
  });
  const navigate = (e, type) => {
    if (type === "prev") {
      setPage(page - 1);
    }
    if (type === "next") {
      setPage(page + 1);
      setOffset(offset + pageLimit);
    }
    // if (page <= 0) {
    //   alert("you have reached prev button limit");
    // }

    console.log(type);
  };
  return (
    <div>
      <div className="header">
        <button onClick={(e) => navigate(e, "prev")}>Prev</button>
        <button onClick={(e) => navigate(e, "next")}>Next</button>
      </div>
      <div class="container">{renderPokemon}</div>
    </div>
  );
};
export default Pokemon;
