import React, { useContext } from "react";
import Card from "../components/Card";
import Examples from "../components/Examples";
import { PokemonContext } from "../context/PokemonContext";

const Search = () => {
  const { error } = useContext(PokemonContext);

  if (error !== "") {
    return (
      <main>
        <div className="content">
          <h1>{error}</h1>
          <Examples />
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="content">
          <Card />
        </div>
      </main>
    );
  }
};

export default Search;
