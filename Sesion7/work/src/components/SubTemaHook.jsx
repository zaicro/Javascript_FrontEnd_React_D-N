import React from "react";
import { useParams } from 'react-router-dom';

export const SubTemaHook = () => {
    const { subtema } = useParams();
    return (
        <div>
            <h1>{subtema}</h1>
        </div>
    )
}