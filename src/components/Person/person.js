import { React } from 'react';
import  styled  from 'styled-components'
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
const person = (props) => {


    // const style = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.age}></input>
        </StyledDiv>
    )
}

export default person