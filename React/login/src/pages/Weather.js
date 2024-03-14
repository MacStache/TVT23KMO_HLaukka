import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
    const [position, setPosition] = useState(null);
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setPosition(position)
                const address = process.env.REACT_APP_URL + 
                '?lat=' + position.coords.latitude +
                '&lon=' + position.coords.longitude +
                '&units=metric' +
                '&lang=fi' +
                '&appid=' + process.env.REACT_APP_API_KEY;
                console.log(address);
                axios.get(address)
                .then(response => {
                    setTemp(response.data.main.temp);
                }).catch(error => {
                    console.log(error);
                    alert('Error: ' + error.message);
                });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <>
            <h3>Current weather on your location</h3>
            {position && <p>Your location is {position.coords.latitude.toFixed(3)}, {position.coords.longitude.toFixed(3)}</p>}
            <p>Temperature is <span>{temp}</span>&#8451;</p>
        </> 
    );
}
