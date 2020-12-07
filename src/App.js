import  React, {useState}  from 'react';
import Person from './Person/person'
import styled from 'styled-components'
import './App.css';

const StyledButton = styled.button`
    font: inherit;
    padding: 3px 12px;
    cursor: pointer;
    color: ${props => props.alt ? 'red' : 'green'};
    background-color: #fff;
    border:1px solid blue;
    
    &:hover {
      background-color : black;
      color: ${props => props.alt ? 'salmon' : 'lightgreen'}
    }
`;

const App = () => {

  const [personState, setPeopleState] = useState({
    person:[
      { id:'123A', age: 5 },
      { id:'456B', age: 21 },
      { id:'789C', age: 29 }
    ],

    others: "Some other value"
    
  })
  
  console.log(personState)
  const onSwitchHandler = (name) => {
    setPeopleState({
          person:[
        {id:'123A', age: name },
        {id:'456B', age: 21 },
        {id:'789C', age: 39 }
      ],
      others: "Some other value",
      showPerson: false  
    })
    console.log(personState)
  }

  const onChangeHandler = (event) =>{
    setPeopleState({
          person:[
        { id:'123A', age: 40 },
        { id:'456B', age: event.target.value },
        { id:'789C', age: 39 }
      ],
      others: "Some other value",
      showPerson: true  
    })
  }

  const deletePersonHandler = (index) => {
    const personArray = personState.person.slice();
    personArray.splice(index, 1)
    setPeopleState({
      person: personArray,
      others: "Some other value",
      showPerson: true  
    })
  }

  let buttonStyle = {
    font: 'inherit',
    padding: '3px 12px',
    cursor: 'pointer',
    color: 'green',
    backgroundColor: '#fff',
    border:'1px solid blue',
    ':hover':{
      backgroundColor : 'black',
      color: 'lightgreen'
    }
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
    person = (<div>
      {
        personState.person.map((person, index)=>{
          return (
            <Person click={() => deletePersonHandler(index)} age={person.age} key={person.id} changed={(event) => onPersonChanged(event, person.id)}/>
            )
          })
        }
    </div>)
    buttonStyle.color = 'red'
    buttonStyle[':hover']={
      backgroundColor : 'black',
      color: 'salmon'
    }
  }

  const classes = [];

  if(personState.person.length <=2) {
    classes.push('red')
  }
  if(personState.person.length <=1) {
    classes.push('bold')
  }
   
  return (
      <div className="App">
          <h1>My First React App</h1>
          <p className={classes.join(" ")}>This works !</p>
          <StyledButton alt={personState.showPerson} onClick={onToggleHandler}>Toggle Person</StyledButton>
          {person}   
      </div>
    );
}

export default App;
