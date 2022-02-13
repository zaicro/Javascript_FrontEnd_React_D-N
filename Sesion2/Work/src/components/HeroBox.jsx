import React from "react";

function HeroBox(props){
    return(
        <div className={props.className}> 
            <h1>Mi nombre es {props.name} y soy {props.hero}</h1>
            {props.children}
        </div>
    )
}

export default HeroBox;