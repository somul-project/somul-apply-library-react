import React from 'react';


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
            return <p>필수 질문입니다.</p>;
        } else {
            return "";
        }
    }


    return (
        <div>
            <h3>
                {label} <span>{getAsterisk()}</span>
            </h3>

            {children}


            {getNotification()}

            <br/>
            <br/>
        </div>);
};

export default Entity;