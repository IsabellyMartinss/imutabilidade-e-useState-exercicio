import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const CorH1 = styled.h1`
  background-color: red;
  padding: 2vw;
  widht: 100vw;
  text-align: left;
  color: white;
`

function App() {
    const pokemons = [
    {
      name: "Pichu",
      type: "Electric",
      evolved: false,
      weight: 2,
      color: 'yellow',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
      id: 0
    },
    {  name: "Pikachu",
      type: "Electric",
      evolved: true,
      weight: 6,
      color: 'yellow',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
      id: 0
    },
    { name: "Raichu",
      type: "Electric",
      evolved: true,
      weight: 30,
      color: 'yellow',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png',
      id: 0
    }]
    const bulbasalrs = [
    {
      name: "Bubasalro",
      type: "grama, tóxico",
      evolved: false,
      weight: 6.9,
      color: 'turquoise',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
      id: 0
    },
    {
      name: "Ivysaur",
      type: "grama, tóxico",
      evolved: true,
      weight: 13,
      color: 'turquoise',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png',
      id: 0
    },
    {
      name: "Venusaur",
      type: "grama, tóxico",
      evolved: true,
      weight: 100,
      color: 'turquoise',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png',
      id: 0
    }]

    const charmanders = [
    {
      name: "Charmander",
      type: "fire",
      evolved: false,
      weight: 8.5,
      color: 'orange',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
      id: 0
    },
    {
      name: "Charmeleon",
      type: "fire",
      evolved: true,
      weight: 19,
      color: 'orange',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png',
      id: 0
    },
    {
      name: "Charizard",
      type: "fire, flying",
      evolved: true,
      weight: 90.5,
      color: 'orange',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png',
      id: 0
    }]
    const squirtles = [{
      name: "Squirtle",
      type: "water",
      evolved: false,
      weight: 9,
      color: 'blue',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
      id: 0
    },
    {
      name: "Wartortle",
      type: "water",
      evolved: true,
      weight: 22.5,
      color: 'blue',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png',
      id: 0
    },
    {
      name: "Blastoise",
      type: "water",
      evolved: true,
      weight: 85.5,
      color: 'blue',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png',
      id: 0
    }]
    const jigglypuffs = [{
      name: "Jigglypuff",
      type: "fairy",
      evolved: false,
      weight: 5.5,
      color: 'pink',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png',
      id: 0
    },
    {
      name: "Wigglytuff",
      type: "fairy",
      evolved: true,
      weight: 12,
      color: 'pink',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png',
      id: 0
    }]

    const [pokemon, setPokemon] = useState(pokemons[0])
    const [bulbasalr, setBubasalro] = useState(bulbasalrs[0])
    const [charmander, setCharmander] = useState(charmanders[0])
    const [squirtle, setSquirtle] = useState(squirtles[0])
    const [jigglypuff, setJigglypuff] = useState(jigglypuffs[0])

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <CorH1>Pokémons preferidos da Isa</CorH1>
    <FlexContainer>
      <PokemonCard name = {pokemon.name} type = {pokemon.type} weight = {pokemon.weight} color = {pokemon.color} image= {pokemon.image} pokemons = {pokemons} setPokemon = {setPokemon}/>

      <PokemonCard name = {bulbasalr.name} type = {bulbasalr.type} weight = {bulbasalr.weight} color = {bulbasalr.color} image = {bulbasalr.image} pokemons = {bulbasalrs} setPokemon = {setBubasalro}/> 

      <PokemonCard name = {charmander.name} type = {charmander.type} weight = {charmander.weight} color = {charmander.color} image = {charmander.image} pokemons = {charmanders} setPokemon = {setCharmander}/> 

      <PokemonCard name = {squirtle.name} type = {squirtle.type} weight = {squirtle.weight} color = {squirtle.color} image = {squirtle.image} pokemons = {squirtles} setPokemon = {setSquirtle}/> 

      <PokemonCard name = {jigglypuff.name} type = {jigglypuff.type} weight = {jigglypuff.weight} color = {jigglypuff.color} image = {jigglypuff.image} pokemons = {jigglypuffs} setPokemon = {setJigglypuff}/> 
    </FlexContainer>
  </>
    
  );
}

export default App;
