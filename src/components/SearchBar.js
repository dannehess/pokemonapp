import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const SearchBar = () => {

    const {setSearch, searchPokemon} = useContext(PokemonContext);

    return(

        <div className="search-bar">
            <form onSubmit={(e) => searchPokemon(e)}>
        <input type="text" placeholder="Search Pokemon..." name="search" onChange={e => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;