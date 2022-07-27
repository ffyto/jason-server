import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const CharacterCard = (props) => {
    const {character} = props
  
  return(
    <div>
      {
        <article className="characterCard__Wrapper">
          <div className="characterCard__ImgWrapper">
            <img src={character.image} alt="Beth's Mytholog" />
          </div>
          <div className="characterCard__ContentWrapper">
            <div className="section">
              <Link to={`/characters/${character.id}`} rel="nofollow noopener noreferrer" target="_blank">
                <h2>{character.name}</h2>
              </Link>
              <span className="status">
                <span className="status__icon"></span> {character.status}
              </span>
            </div>
            <div className="section">
              <span className="text-gray">Last known location:</span>
              <p className="text-white">
                {character.location.name}
              </p>
            </div>
          </div>
      </article>
    }
    </div>
  )
}

export default CharacterCard
