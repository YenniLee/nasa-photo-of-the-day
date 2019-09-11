import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

function NasaInfo() {
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=ubpDZOsNMO4xXKaoZvhhyBUGjpAhf44mStmIW2Q0`)
        .then(response => {
            const photo = response.data;
            console.log(response.data);
            setPhoto(photo);
        })
        .catch(err => {
            console.log("No Response", err);
        });

    }, []);

    return (
        <div className="entry">
            <NasaCard
                date={photo.date}
                title={photo.title}
                imgUrl={photo.url}
                desc={photo.explanation}
                copy={photo.copyright}
            />
        </div>
    )
}

export default NasaInfo;