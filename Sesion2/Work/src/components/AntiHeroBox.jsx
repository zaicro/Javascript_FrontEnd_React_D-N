import React, { Component } from "react";

class AntiHeroBox extends Component{
    render(){
        return <div>
            <h1>Mi nombre es {this.props.name} y soy el antiHeroe de {this.props.antiHero}</h1>
        </div>
    }
}

export default AntiHeroBox;