import React, { useState } from 'react';
import Monkey from './Monkey.jpeg';

function ImageManipulation() {
  const [height, setHeight] = useState(200);
  const [borderColor, setBorderColor] = useState('black');
  const [rotation, setRotation] = useState(0);
  const defaultHeight = 200;

  const increaseHeight = () => setHeight(prev => prev + 20);
  const decreaseHeight = () => setHeight(prev => (prev > 50 ? prev - 20 : prev));
  const resetHeight = () => {
    setHeight(defaultHeight);
    setRotation(0);
  };
  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBorderColor(`rgb(${r}, ${g}, ${b})`);
  };
  const rotateImage = () => setRotation(prev => prev + 45);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          border: `5px solid ${borderColor}`,
          borderRadius: '16px',
          padding: '30px',
          textAlign: 'center',
          background: 'white',
          boxShadow: `0 0 25px ${borderColor}`,
          width: '450px',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Monkey Image Manipulation</h2>

        <div>
          <img
            src={Monkey}
            alt="Monkey"
            height={height}
            style={{
              width: 'auto',
              borderRadius: '12px',
              border: `6px solid ${borderColor}`,
              boxShadow: `0 6px 15px ${borderColor}`,
              transition: 'all 0.5s ease-in-out',
              transform: `scale(${height / defaultHeight}) rotate(${rotation}deg)`,
            }}
          />
        </div>

        <div style={{ marginTop: '25px' }}>
          <button onClick={increaseHeight} style={buttonStyle('green')}>
            Increase Height
          </button>
          <button onClick={decreaseHeight} style={buttonStyle('orange')}>
            Decrease Height
          </button>
          <button onClick={resetHeight} style={buttonStyle('blue')}>
            Reset
          </button>
          <button onClick={changeColor} style={buttonStyle('purple')}>
            Change Color
          </button>
          <button onClick={rotateImage} style={buttonStyle('red')}>
            Rotate
          </button>
        </div>

        <p style={{ marginTop: '20px', fontSize: '16px' }}>
          Height: <b>{height}px</b> | Border: <b>{borderColor}</b> | Rotation: <b>{rotation}°</b>
        </p>
      </div>
    </div>
  );
}

const buttonStyle = (color) => ({
  margin: '6px',
  padding: '10px 14px',
  fontSize: '15px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: color,
  color: 'white',
  transition: 'transform 0.2s ease, background-color 0.3s ease',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  outline: 'none',
});

export default ImageManipulation;
