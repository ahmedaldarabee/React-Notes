import React from 'react'

const Form = (props) => {
    return ( <form onSubmit={props.onSubmit}> {props.children} </form> )
}

const Controller = (props) => {
    return ( <div> {props.children} </div> )
}

Form.Controller = Controller;

export default Form;