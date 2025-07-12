import React from 'react'
import {motion} from "framer-motion"




const Test = () => {

  const variants = {
    visible:{opacity:1, x:800, transition:{type:"spring",stiffness:100,damping:100}},
    hidden:{opacity:0},
  }
  const items =[
    "item1","item2","item3","item4"
  ]



  return (
    <div className='course'>
        <motion.ul initail="hidden" animate="visible" variants={variants}>
           {items.map((item) =>(
             <motion.li key={item}>{item}</motion.li>
           ))}
        </motion.ul>
    </div>
  )
}

export default Test