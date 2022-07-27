import { useState, useEffect} from 'react'

import CharacterCard from '../components/CharacterCard'

import { getCharacters } from '../services/characters'

const CharactersPage = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const fetchData =  async () => {
      const result = await getCharacters()
      setCharacters(result)
    }
    fetchData();
  }, [])

  // Effect to fetch the characters from the API

  return(
    <div className="App-header">
      <h1>CharacterDetailPage</h1>
      <section className="showcase__Wrapper">
        <section className="showcase__Inner">
        <ul>
          {
              characters.map((character) => {
                return(
                  <li key={character.id}> <CharacterCard character={character}/> </li>
                )
              })
            }
          </ul>
        </section>
      </section>
    </div>
  )
}

export default CharactersPage
