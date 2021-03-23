import React, { createFactory } from 'react';
import './buttons.css';

const classNames = className => className.join(" ");


// note to self: kolme pistettä  pilkkoo propsin sisällön ja luo uuden js muuttujan
// ... ottaa kaikki muut kuin className  eli ...rest

const Button = ({ className = "", primary, secondary, ...props }) => {

    return (
        <button
            type="button"
            className=
            {classNames([
                "button",
                className,
                primary ? "button--primary" : "",
                secondary ? "button--secondary" : ""
            ])}
            {...props} />
    );
}

const FloatingButton = ({className= "", ...props}) => {
    return (
        <Button 
        className= {classNames(["button--floating", className])} {...props} />
    );
}


export { Button as default, Button, FloatingButton };



