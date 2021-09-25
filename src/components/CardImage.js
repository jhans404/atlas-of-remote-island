import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <img src={props.img} alt="island"></img>
  );
}

export default CardImage;