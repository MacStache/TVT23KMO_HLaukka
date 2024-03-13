import React from "react";
import "./Home.css";
import { Navigate } from "react-router-dom";

export default function Home({user}) {
    if (user === null) {
        return <Navigate to="/" />;
    }
    return (
            <p> This is my great homepage</p>
    );
}
