import React, { useState } from 'react'
import './App.css'
import Operation from './OperationFirst'
import Module from '../components/Modules/module';
import Adduser from '../components/AddUser/Adduser';

const App = () => {

    const [appearModule,setAppearModule] = useState(false);
    
    const appearModuleState = (state) => {
        setAppearModule(state);
    };

    const closeModule = () => {
        setAppearModule(false);
    };

    const addUserHandler = (data) => {
        console.log(data);
        return data;
    };

    return(
        <>
            <Operation appearModuleState={appearModuleState} addUserSection={addUserHandler}/>
            <Module appearModule={appearModule} closeModule={closeModule}>
                {<Adduser addUserHandler={addUserHandler}/>}
            </Module>
        </>
    );
}

export default App;