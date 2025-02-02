import React from "react";
import styles from "./card.module.css";

const Card = ({infoList,deleteSection}) => {

    const allInfo = infoList.map(({name,age,major,gender,id}) => (
        <div className='container flex-center flex-col relative' key={id}>

            <div className={styles.userInfo} style={{"backgroundColor": gender === "male" ? "gray" : "#029000"}}>
                <h3>User name :  {name}  </h3>
                <p> User  age  : {age}   </p>
                <p> User major : {major} </p>
                <button className={styles.pointer} onClick={(event) => deleteSection(event,id)}> Click to delete this box </button>
            </div>
        
        </div>
    ));

    return (
        <div>{allInfo}</div>
    );
}

export default Card;