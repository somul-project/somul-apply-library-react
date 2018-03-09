import React from 'react';
import "./Form.css";


const Entity = ({label, validated, required, children}) => {

    function getAsterisk() {
        if (required) {
            return "*";
        } else {
            return "";
        }
    }

    function getNotificationMessage() {
        if (required) {
            return "필수 질문입니다.";
        } else {
            return "";
        }
    }

    let notificationMessageWillBeRendered = "　";
    if (!validated) {
        notificationMessageWillBeRendered = getNotificationMessage();
    }

    return (
        <div>
            <h4>
                {label} <span className="required">{getAsterisk()}</span>
            </h4>

            {children}

            <p className="required">
                {notificationMessageWillBeRendered}
            </p>

            <br/>
            <br/>
        </div>);
};

export default Entity;
