import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../styling/TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Penguin',
            url: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/125AE/production/_111928157_penguino.jpg'
        },
        {
            name: 'Cat',
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*'
        }
    ])

    const swiped = (dir, name) => {
        console.log('removing: ' + name)
    }
      
    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
                {people.map((person) => (
                    <TinderCard 
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
