import  React, {useState}  from 'react';
import Persons from '../components/persons'
import './App.css';
import Cockpit from '../components/Cockpit/cockpit'


const App = () => {

  const [personState, setPeopleState] = useState({
    person:[
      { id:'123A', age: 5 },
      { id:'456B', age: 21 },
      { id:'789C', age: 29 }
    ],

    others: "Some other value"
    
  })

  const deletePersonHandler = (index) => {
    const personArray = personState.person.slice();
    personArray.splice(index, 1)
    setPeopleState({
      person: personArray,
      others: "Some other value",
      showPerson: true  
    })
  }

  

  const onPersonChanged = (event, id) => {
    const personIndex = personState.person.findIndex((p)=>{
      return p.id == id
    })

    const person = {
      ...personState.person[personIndex]
    }

    person.age = event.target.value;

    const persons = [...personState.person]
    persons[personIndex] = person

    setPeopleState({
      person : persons,
      others: "Some other value",
      showPerson: true  
    })
  }

  const onToggleHandler = () =>{
    let flag = personState.showPerson;
    setPeopleState({
      person:[
        {id:'123A', age: 40 },
        {id:'456B', age: 20 },
        {id:'789C', age: 39 }
      ],
      others: "Some other value",
      showPerson : !flag
    })
  }
  let person = null
  if(personState.showPerson){
    person = (
    <div>
      <Persons person={personState.person} clicked={deletePersonHandler} changed={onPersonChanged} />
    </div>
    )
  }
   
  return (
      <div className="App">
          <Cockpit show={personState.showPerson} person={personState.person} toggle={onToggleHandler}/>
          {person}   
      </div>
    );
}

export default App;
