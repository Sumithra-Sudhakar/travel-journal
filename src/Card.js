import React from "react";
import './App.css'
 
export default function Card(props){
    return (
      
            <div className="card_div">
            <img className="image" src={props.item.image} alt="location_image"/>
            <div className="content">
            <span className="country"> <i class="material-icons" id="icon">location_on</i>  {props.item.country}  </span>
            <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">View on google maps</a>
            <h1 className= "location">{props.item.location}</h1>
            <h3 className="date">{props.item.date}</h3>
            <p className="about">{props.item.about}</p>
            </div>
            

        </div>
      
    )
}