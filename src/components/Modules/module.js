import React, { Fragment } from "react";
import mainStyle from './module.module.css';
import ReactDom from 'react-dom';


const Backdrop = ({ closeModule }) => {
    return <div className={mainStyle.backDrop} onClick={closeModule}></div>;
};

const Overlay = ({ children , appearModule }) => {
    return (
        <div className={`${mainStyle.overlay} ${appearModule ? "show" : "hidden"}`}> 
            {children}
        </div>
    )
}

const Module = ({ children, appearModule, closeModule }) => {
    return (
        <Fragment>
            {appearModule &&
                ReactDom.createPortal(
                    <div>
                        <Backdrop closeModule={closeModule} />
                        <Overlay appearModule={appearModule}>
                            {children}
                        </Overlay>
                    </div>,
                    document.querySelector("#popupBackdrop")
                )}
        </Fragment>
    );
};

export default Module;
