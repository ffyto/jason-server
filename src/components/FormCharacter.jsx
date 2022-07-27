import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCharacter } from '../services/characters'

const status = [
  'Alive',
  'Dead',
  'Unknown'
]
const species = [
  'Human',
  'Mythological Creature',
  'Alien',
  'Robot',
  'Unknown',
]

const origins = [
  {
    "id": 1,
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  {
    "id": 2,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 3,
    "name": "unknown",
    "url": ""
  }
]

const FormCharacter = () => {
  let navigate = useNavigate()
  const [form, setName] = useState({})

  const handleChange = (e) => {
    setName({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const origin = origins.find(origin => origin.id === Number(form.origin));
    const object = {
      ...form,
      /* id: Date.now(), */
      type:"",
      gender:"Male",
      origin: origin,
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      }
    }
    createCharacter(object);
    navigate("/characters", { replace: true });
    // Note: You must create a structure similar to a character database item
    // you can add the fields that are not obtained from the form manually


    // after creating a new character redirect to the characters page
    // createCharacter(form)
  }

  return(
    <div>
      <h1>Create a new character</h1>
      <br />
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input name='name' type="text" className="form-control" id="name" placeholder="Enter name" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <br />
          <select name="status" id="status" onChange={handleChange}>
            <option value="">Select option</option>
            {status.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="species">Specie</label>
          <br />
          <select name="species" id="species" onChange={handleChange}>
            <option value="">Select option</option>
            {species.map(specie => (
              <option key={specie} value={specie}>{specie}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <br />
          <select name="origin" id="origin" onChange={handleChange}>
            <option value="">Select option</option>
            {origins.map(origin => (
              <option key={origin.id} value={origin.id}>{origin.name}</option>
            ))}
          </select>
        </div>
        <br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default FormCharacter
