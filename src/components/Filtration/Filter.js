import React, { Fragment, useState } from "react";
import styles from './filter.module.css';

const Filter = ({filterFun}) => {

    const [name,setName] = useState('');

    const printUsername = (event) => {
        setName(event.target.value);
        filterFun(event.target.value);
    };


    return(
        <Fragment>
            <div>
                <input onChange={printUsername} className={styles.nameInput} type="text" placeholder="Enter your name"/>
            </div>
        </Fragment>
    )
}


export default Filter;