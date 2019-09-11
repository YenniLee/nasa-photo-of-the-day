import React from "react";

const NasaCard = props => {
    return(
        <div className="text-container">
            <h1>Astronomy Photo for <span>{props.date}</span></h1>
            <h2>Title: {props.title}</h2>
            <img className="APOD" alt="space photo"src={props.imgUrl} />
            <p>{props.desc}</p>
            <h3>Copyright: {props.copy}</h3>
        </div>
    )
}

export default NasaCard;