import  React, {useState}  from 'react';
import Person from './Person/person'
import './App.css';

const App = () => {

  const [personState, setPeopleState] = useState({
    person:[
      { age: 5 },
      { age: 21 },
      { age: 29 }
    ],

    others: "Some other value"
    
  })
  
  console.log(personState)
  const onSwitchHandler = () => {
    setPeopleState({
          person:[
        { age: 25 },
        { age: 21 },
        { age: 39 }
      ],
      others: "Some other value"  
    })
    console.log(personState)
  }
   
  return (
      <div className="App">
          <h1>My First React App</h1>
          <button onClick={onSwitchHandler}>Switch Name</button>
          <Person age={personState.person[0].age}/>
          <Person age={personState.person[1].age}>Hello there!</Person>
          <Person age={personState.person[2].age}/>
      </div>
    );
}

export default App;
