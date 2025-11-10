import React, { useState } from 'react';
import Monkey from './Monkey.jpeg'; 

function ImageManipulation() {
  const [height, setHeight] = useState(200);
  const [borderColor, setBorderColor] = useState('black');
  const defaultHeight = 200;
  const increaseHeight = () => setHeight(prev => prev + 20);
  const decreaseHeight = () => setHeight(prev => (prev > 50 ? prev - 20 : prev));
  const resetHeight = () => setHeight(defaultHeight);
  const changeColor = () => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBorderColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px' }}>Monkey Image Manipulation</h2>

      <div>
        <img
          src={Monkey}
          alt="Monkey"
          height={height}
          style={{
            width: 'auto',
            borderRadius: '12px',
            border: `8px solid ${borderColor}`,
            boxShadow: `0 6px 15px ${borderColor}`,
            transition: 'all 0.4s ease-in-out',
            transform: `scale(${height / defaultHeight})`,
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
          Reset Size
        </button>

        <button onClick={changeColor} style={buttonStyle('purple')}>
          Change Color
        </button>
      </div>

      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Current Height: <b>{height}px</b>
      </p>
      <p style={{ fontSize: '16px' }}>Border Color: <b>{borderColor}</b></p>
    </div>
  );
}
const buttonStyle = (color) => ({
  margin: '0 10px',
  padding: '10px 18px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: color,
  color: 'white',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
});

export default ImageManipulation;
