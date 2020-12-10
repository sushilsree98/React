import { React, useEffect } from 'react'
import styled from 'styled-components'
import Aux from '../hoc/Auxiliary'

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

const Cockpit = (props) => {
  useEffect(() => {
    
  })
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
  if(props.show){
      buttonStyle.color = 'red'
      buttonStyle[':hover']={
      backgroundColor : 'black',
      color: 'salmon'
    }
  }
  const classes = [];

  if(props.person.length <=2) {
    classes.push('red')
  }
  if(props.person.length <=1) {
    classes.push('bold')
  }

    return (
    <Aux>
        <h1>My First React App</h1>
        <p className={classes.join(" ")}>This works !</p>
        <StyledButton alt={props.show} onClick={props.toggle}>Toggle Person</StyledButton>
    </Aux>
    )
}

export default Cockpit