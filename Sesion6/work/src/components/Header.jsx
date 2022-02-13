import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <Link to="">Inicio</Link>
            <Link to="/react">React</Link>
            <Link to="/redux">Redux</Link>
        </div>
    )
}