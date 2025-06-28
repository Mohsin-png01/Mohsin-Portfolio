import { useEffect, useState } from "react";

export const StarBackground = () => {
  // We'll keep the state structure for consistency, though we don't need it
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Empty effect to maintain the same component structure
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: 'linear-gradient(90deg, rgba(12, 11, 13, 0.8) 0%, rgba(14, 14, 84, 0.9) 100%)',
        backgroundBlendMode: 'overlay'
      }}
    />
  );
};