import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Card = () => {
    
    const {error, pokemon, capitalize} = useContext(PokemonContext);

    const { id, 
            name,
            weight,
            height,
            base_experience,
            abilities,
            sprites,
            stats, 
            types,
          } = pokemon;

    return(
        <div className="card">
            <h2 className="name">{name}</h2>
            {sprites &&
            <div className="sprites">
            <img src={sprites.front_default} />
            <img src={sprites.back_default} />
            </div>
            }
            <div className="flex space-between">
                <div>
                <h3 className="mt-24">ID:</h3>
                <span className="pill">{id}</span>
                </div>
                <div>
                <h3 className="mt-24">Weight:</h3>
                <span className="pill">{weight}</span>
                </div>
                <div>
                <h3 className="mt-24">Height:</h3>
                <span className="pill">{height}</span>
                </div>
            </div>
            <h3>Base experience:</h3>
            <span className="pill">{base_experience}</span>
            <h3>Abilities:</h3>
            <ul className="abilities">
            {abilities && abilities.map(ability => {
                return(
                    <li key={ability} className="pill">{ability}</li>
                )
            })}
            </ul>

            <h3>Stats</h3>
            <div className="stats">
            <table className="stat">
                <thead>
                    <tr>
                    <th>Stat name</th>
                    <th>Base stat</th>
                    <th>Effort</th>
                    </tr>
                </thead>
                <tbody>
            {stats && stats.map(stat => {
                return(
                    <tr key={stat.stat.name}>
                    <td><span className="">{capitalize(stat.stat.name)}</span></td>
                    <td><span className="">{stat.base_stat}</span></td>
                    <td><span className="">{stat.effort}</span></td>
                    </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
           
            <h3>Types</h3>
            <ul className="types">
            {types && types.map(type => {
                return(
                    <li key={type.type.name} className="pill">{type.type.name}</li>
                )
            })}
            </ul>
        </div>
)}

export default Card;