import "./pokemonDetails.css";

import React, { useEffect, useState } from "react";

const PokemonDetail = (props) => {
  const url = props.pokemonDetails.url; // fetch more details;
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  //sprites height weight
  //front_shiny

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokemonInfo(res);
        setName(res.name);
        if (res.sprites && res.sprites.front_shiny) {
          setImgUrl(res.sprites.front_shiny);
        } else if (res.sprites && res.sprites.back_shiny) {
          setImgUrl(res.sprites.back_shiny);
        } else {
          setImgUrl(res.sprites.front_default);
        }
      });
  }, []);

  return (
    <div class="card-container">
      <div className="card-img">
        <img src={imgUrl} placeholder={props.pokemonDetails.name} />
      </div>
      <div className="card-text">
        <span> Name : {props.pokemonDetails.name}</span>
        <br />
        <span> Height : {pokemonInfo.height}</span>
        <br />
        <span> Weight : {pokemonInfo.weight}</span>
      </div>
    </div>
  );
};

export default React.memo(PokemonDetail);
