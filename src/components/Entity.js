import React from 'react';
import "./Form.css";


const Entity = ({label, required, children}) => {

    function getAsterisk() {
        if (required) {
            return "*";
        } else {
            return "";
        }
    }

    function getNotification() {
        if (required) {
            return <p className="required">필수 질문입니다.</p>;
        } else {
            return "";
        }
    }


    return (
        <div>
            <h3>
                {label} <span className="required">{getAsterisk()}</span>
            </h3>

            {children}


            {getNotification()}

            <br/>
            <br/>
        </div>);
};

export default Entity;