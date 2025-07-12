import React from 'react'
import "./cursor.scss"
import {useState, useEffect} from "react"
import { motion } from 'framer-motion'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Update mouse position
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
  
    useEffect(() => {
      // Add mouse move listener on component mount
      window.addEventListener('mousemove', handleMouseMove);
  
      // Cleanup function to remove event listener on component unmount
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


  return (
    <motion.div
    animate={{ x: mousePosition.x +10, y: mousePosition.y +10 }} // Center the box on the cursor 
    className='cursor'// Adjust spring dynamics for movement
    
  />
    
  )
}

export default Cursor