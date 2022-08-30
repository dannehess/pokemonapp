import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Examples = () => {

    const {examples, capitalize} = useContext(PokemonContext);

    return(
        <div className="examples-wrapper">
            <h3>Examples:</h3>
            <ul className="examples">
            {examples && examples.map(example => {
                return (
                <li className="example">{capitalize(example)}</li>
                )
            })}
            </ul>
        </div>
    )

}

export default Examples;