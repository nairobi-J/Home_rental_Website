import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateButton({ route }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <button onClick={() => handleClick(route)}>
      {route}
    </button>
  );
}

export default NavigateButton;
