import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/office-test.mp4' autoPlay loop muted />
      <h1>INDA DIGITAL</h1>
      <p>Embarque conosco!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VAMOS NESSA?
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          NOSSA AGÊNCIA <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;