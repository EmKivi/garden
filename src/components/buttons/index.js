import React from 'react';
import './buttons';


const classNames = classNames => classNames.join(" ");


const Button = ({ className = "", primary, secondary, ...rest }) => {

    return (
        <button
            type="button"
            className={classNames([
                "button",
                className,
                primary ? "button--primary" : "",
                secondary ? "button--secondary" : "",
            ])}


            {...rest} />

    );
}


const FloatingButton =   ({className = "", ...props}) => {
    return (
        <Button className ={classNames(["button--floating"], className)} {...props} />
    )
}

export { Button as default, Button, FloatingButton }