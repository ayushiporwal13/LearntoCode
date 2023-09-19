import React from "react";

const Cards = (props) => {
    return(
        <div className='Cards'>
            <img src={props.img}></img>
            <h3>{props.title}</h3>
            <h4>{props.desc}</h4>
            <a href={props.link} target="_blank"><button>Details</button></a>
        </div>
    )
}

export default Cards;