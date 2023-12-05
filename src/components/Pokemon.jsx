"use client"

import { useState, useEffect } from 'react';


export default function pokemon() {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage, setPokemonImage] = useState(null);
    const [pokemonDisplayName, setPokemonDisplayName] = useState('');

    const showPokemon = async () => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

        const clonedResponse = response.clone();
        const data = await response.json();

        if (data && data.sprites && data.sprites.front_default) {
            const imageUrl = data.sprites.front_default;
            setPokemonImage(imageUrl);
            setPokemonDisplayName(pokemonName);
        } else {
            setPokemonImage(null);
            setPokemonDisplayName("");
        }
    };

    return (
        <div>
            <div className="pokemon-container" >
                <p className='text'>
                    Here's a pokemon api:
                    <a href={"https://pokeapi.co/api/v2/pokemon"}>https://pokeapi.co/api/v2/pokemon</a>
                </p>
                <p>You have to replace the text with the name of the pokemon you want to search for.
                </p>
                <p>Names hint: "ditto", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise" </p>
                <input 
                    type='text' 
                    placeholder='Enter Pokemon name' 
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <button className='bttn' onClick={showPokemon}>Search</button>
                {pokemonImage && (
                    <div>
                        <h3>{pokemonDisplayName}</h3>
                        <img src={pokemonImage} alt={pokemonName} />
                    </div>
                )}
            </div>
        </div>
    );
}