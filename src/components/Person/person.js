import { React, Component } from 'react';
import  styled  from 'styled-components';
import PropTypes  from 'prop-types';
// import './person.css';

const StyledDiv = styled.div`
    {
        width: 60%;
       border: 1px solid #eee;
       box-shadow:  0 2px 3px #ccc;
       margin: 12px auto;
       padding: 16px;
       text-align: center;
    }

    @media (min-width: 500px) {
         width: 450px
     }

    `;
class Person extends Component  {
    componentDidMount(){
        this.inputElement.focus();
    }
    render(){
        return(
        <StyledDiv>
            <p onClick={this.props.click}>I'm {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type='text' ref={(ele)=>{this.inputElement = ele}} onChange={this.props.changed} value={this.props.age}></input>
        </StyledDiv>
        )
    } 
    
}

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default Person