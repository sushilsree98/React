import React, { Component } from'react';
import Person from './Person/person'

class Persons extends Component {
  shouldComponentUpdate(nextProp, nextState){
    return true
  }

  getSnapshotBeforeUpdate(prevProp, prevState){

  }

  componentDidUpdate(prevProp, prevState){

  }

  render(){
    return (this.props.person.map((person, index)=>{
             return (
               <Person 
               click={() => this.props.clicked(index)} 
               age={person.age} key={person.id} 
               changed={(event) => this.props.changed(event, person.id)}/>
               )
             })
       )
  }
}

export default Persons