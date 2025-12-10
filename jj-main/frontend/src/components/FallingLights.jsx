import React, { useEffect, useState, useMemo } from 'react';

const FallingLights = () => {
  const [lights, setLights] = useState([]);

  const generateLights = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7
    }));
  }, []);

  useEffect(() => {
    setLights(generateLights);
  }, [generateLights]);

  return (
    <div className="falling-lights-container">
      {lights.map((light) => (
        <div
          key={light.id}
          className="falling-light"
          style={{
            left: `${light.left}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            animationDelay: `${light.delay}s`,
            animationDuration: `${light.duration}s`,
            opacity: light.opacity
          }}
        />
      ))}
    </div>
  );
};

export default FallingLights;
