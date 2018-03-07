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
            return "필수 질문입니다.";
        } else {
            return "";
        }
    }


    return (
        <div>
            <h4>
                {label} <span className="required">{getAsterisk()}</span>
            </h4>

            {children}


            <p className="required">
                {getNotification()}
            </p>

            <br/>
            <br/>
        </div>);
};

export default Entity;
