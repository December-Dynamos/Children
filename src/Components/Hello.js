
import React from "react";

const Hello = (props) => {
    console.log(props);
    return (
        <div>
            {props.children}
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
            {props.children}
            <hr/>
        </div>
    );
}

export default Hello;


