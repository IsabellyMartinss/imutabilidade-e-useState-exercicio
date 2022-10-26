import React, { useState } from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = ({name, type, weight, color, image, setPokemon, pokemons}) => {
    const [contador, setContador] = useState(0)
    
    const evoluirPokemon = () => {
      if (contador < 5){  
        setPokemon (pokemons[contador])
        setContador(contador + 1)     
    }}
    
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard