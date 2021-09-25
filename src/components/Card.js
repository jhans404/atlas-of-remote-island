import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage img={props.img}/>
            <CardInfo name={props.name} info={props.info} lat={props.lat} lon={props.lon} site={props.site}/>
        </div>
      </div>
    </li>
  );
}

export default Card;
