import React from'react';
import Person from './Person/person'

const persons = (props) => (props.person.map((person, index)=>{
          return (
            <Person 
            click={() => props.clicked(index)} 
            age={person.age} key={person.id} 
            changed={(event) => props.changed(event, person.id)}/>
            )
          })
    )

export default persons