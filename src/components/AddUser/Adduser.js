import React, { useState } from "react";
import Button from "../Layout/Button";

import Form from "../Layout/Form";
import mainStyle from './Add.module.css';

const Adduser = ({addUserHandler}) => {

    const [input , setInput] = useState({
        name : '',
        age : '',
        major:'',
        gender:''
    })
    
    const submitHandler = (event) => {
        event.preventDefault();
        addUserHandler({
            id: Math.round(Math.random() * 100),
            name: input.name,
            age: input.age,
            major: input.major,
            gender: input.gender
        });
    };
    

    const inputHandler = (event) => {
        const key   = event.target.id;
        const value = event.target.value;
        
        setInput((prevState) => {
            return {
                ...prevState, [key] : value
            }
        })
    }

    const resetHandler = function(){
        return setInput({name:'',age:'',major:'',gender:''});
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                {/* name */}
                <Form.Controller>
                    <div className={mainStyle.control}>
                        <input id="name" onChange={inputHandler} value={input.name} className={mainStyle.controlInput} type="text" placeholder="Enter your name"/>
                    </div>
                </Form.Controller>

                {/* age */}
                <Form.Controller>
                    <div className={mainStyle.control}>
                        <input id="age" onChange={inputHandler} value={input.age} className={mainStyle.controlInput} type="text" placeholder="Enter your age"/>
                    </div>
                </Form.Controller>

                {/* major */}
                <Form.Controller>
                    <div className={mainStyle.control}>
                        <input id="major" onChange={inputHandler} value={input.major} className={mainStyle.controlInput} type="text" placeholder="Enter your major"/>
                    </div>
                </Form.Controller>

                {/* gender */}
                <Form.Controller>
                    <div className={mainStyle.control}>
                        <input id="gender" onChange={inputHandler} value={input.gender} className={mainStyle.controlInput} type="text" placeholder="Enter your gender"/>
                    </div>
                </Form.Controller>

                {/* submit and rest button */}
                <Form.Controller>
                    <div className={`${mainStyle.control}`}>
                        <Button type="submit">save</Button>
                        <Button type="reset" onClick={resetHandler}>clear inputs</Button>
                    </div>
                </Form.Controller>
            </form>
        </>
    )
}

export default Adduser;