import React from "react";

const NasaCard = props => {
    return(
        <div className="photo-container">
            <h1>Astronomy Photo of the Day</h1>
            <h2>Photo Title: {props.title}</h2>
            <img className="APOD" alt="space photo"src={props.imgUrl} />
            <p>{props.desc}</p>
            <h3>Copyright: {props.copy}</h3>
        </div>
    )
}

export default NasaCard;