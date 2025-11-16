// src/components/CursorSpotlight.jsx
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CursorSpotlight = () => {
  const { x, y } = useMousePosition();
  const size = 300; // The size of the spotlight circle

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
      }}
    />
  );
};

export default CursorSpotlight;