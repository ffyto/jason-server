import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {deleteCharacter, getCharacter} from '../services/characters'

const CharacterDetailPage = () => {
  const [character, setCharacter]= useState({})
  const {id} = useParams();
  const [location, setLocation] = useState({})
  const [origin, setOrigin] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData =  async () => {
      const result = await getCharacter(id)
      setCharacter(result)
      const {origin: tempOrigin, location:tempLocation} = result;
      setLocation(tempOrigin)
      setOrigin(tempLocation)
    }
    fetchData();
  }, [])
  const handleDelete = () => {
    deleteCharacter(character.id)
    navigate("/characters", {replace: true})
  };
  return(
    <div>
    <img src={character.image}></img>
      <h1>{`Name: ${character.name}`}</h1>
      <h2>{`Status: ${character.status}`}</h2>
      <h2>{`Species: ${character.species}`}</h2>
      <h2>{`Gender: ${character.gender}`}</h2>
      <h2>{`Origin: ${origin.name}`}</h2>
      <h2>{`Location: ${location.name}`}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default CharacterDetailPage
