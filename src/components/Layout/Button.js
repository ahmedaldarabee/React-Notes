import React from "react";
import styles from './form.module.css'
import classNames from 'classnames';

const Button = (params) => {
    const className = classNames(styles.buttonDesign, styles.capitalize, styles.white);
    return ( <button  type={`${params.type ? params.type : 'button' }`} className={className} onClick={params.onClick} > {params.children} </button>)
}

export default Button;