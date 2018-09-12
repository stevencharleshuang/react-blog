import React from 'react';
import HeroImg from '../images/bg-001.jpg';

export default function Hero(props) {
  const heroStyle = {
    height: props.intViewportHeight - 50
  }
  console.log(props)
  return (
    <div className="hero" style={ heroStyle }>
      <h1>IveBin</h1>
      <h2>The Travel Blogging App</h2>
      <br />
      <h3>Where have youBin?</h3>
    </div>
  );
};
