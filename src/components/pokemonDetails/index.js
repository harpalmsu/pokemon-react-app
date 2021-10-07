import "./pokemonDetails.css";
import * as Constants from "../../constants";

import { useRouteMatch, useParams } from "react-router-dom";
import React from "react";

const PokemonDetail = ({ pokemonDetails }) => {
  const placeholder = Constants.placeholderImg;

  const match = useRouteMatch();
  const params = useParams();

  console.log("dtls", match, params);

  const name = pokemonDetails.name || "";
  const height = pokemonDetails.height || "";
  const weight = pokemonDetails.weight || "";
  const imgUrl = pokemonDetails.sprites.front_default || placeholder;

  return (
    <div class="card-container">
      <div className="card-img">
        <img src={imgUrl} placeholder={name} alt={name} />
      </div>
      <div className="card-text">
        <span> Name : {name}</span>
        <br />
        <span> Height : {height}</span>
        <br />
        <span> Weight : {weight}</span>
      </div>
    </div>
  );
};

export default React.memo(PokemonDetail);
