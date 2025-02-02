import React, { useState, Fragment } from "react";
import "./App.css";

import Card from "../components/Card/Card";
import Filter from "../components/Filtration/Filter";

import Button from "../components/Layout/Button";
import Adduser from "../components/AddUser/Adduser";

const Operation = ({appearModuleState,addUserSection}) => { 
    const [filter,setFilter] = useState('');

    const [data,setData] = useState([{
            id:   1000,
            name : "ahmed",
            age  :2000,
            major: "software engineer",
            gender:"male"
        },{
            id:   3000,
            name : "mohammed",
            age  :22,
            major: "software engineer",
            gender:"male"
        },{
            id:   4000,
            name : "narmeen",
            age  :20,
            major: "generic work",
            gender:"female"
        },{
            id:   5000,
            name : "mai",
            age  :23,
            major: "generic work",
            gender:"female"
        }
    ]);

    const deleteHandler = (Event,selectedBlock) => {
        setData((prevData) => {
            return prevData.filter((ele) => ele.id !== selectedBlock);
        });
    };

    // to print new name that added in the input field!
    const filterFun = (name) => {
        setFilter(name);
    };

    const dataHandler = () => {
        // that's mean there is an data
        if(filter.length > 0){
            return data.filter((ele) => ele.name.includes(filter));
        }
        return data;
    };
    
    const [mainState, setMainState] = useState(false);

    const showState = () => {
        setMainState(true);
        appearModuleState(mainState);
    }

    const hideState = () => {
        setMainState(false);
        appearModuleState(mainState);
    }

    const addUserManagement = (newData) => {
        setData((prevData) => setData([...prevData, newData]));
    }

    const mainOperationContent = () => {
        return(
            <Fragment>
                <div className='flex-center flex-col'>

                    <h1 className='white capitalize'>data section</h1>
                    
                    <div className='flex-center'>
                        <Button onClick={showState} > show popup </Button>
                        <Button onClick={hideState} > hidden popup </Button>
                    </div>
                    
                    <Filter filterFun={filterFun}/>
                    <Card infoList = {dataHandler()} deleteSection={deleteHandler}/>
                </div>
            </Fragment>
        )
    }

    return (
        <>
            <div>{mainOperationContent()}</div>
            <Adduser addUserHandler={addUserManagement}/>
        </>
    )
};

export default Operation;