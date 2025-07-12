import React from 'react'
import "./portfolio.scss"
import {motion , useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from 'react';

const items =[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat. Natus perferendis in officiis enim itaque, doloremque nesciunt."
    },
    {
        id:2,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/267363/pexels-photo-267363.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat. Natus perferendis in officiis enim itaque, doloremque nesciunt."
    },
    {
        id:3,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/3584993/pexels-photo-3584993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat. Natus perferendis in officiis enim itaque, doloremque nesciunt."
    },
    {
        id:4,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/15863000/pexels-photo-15863000/free-photo-of-computer-monitor-with-openai-website-loading-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat. Natus perferendis in officiis enim itaque, doloremque nesciunt."
    },
];

const Single =({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref,})
    const y = useTransform(scrollYProgress,[0,1],[-300, 300] )
    return(
        <section >
            <div className="container" >
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset:["end end" , "start start"]})
    const scaleX = useSpring(scrollYProgress,{stiffness:100, damping:30,})
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
    
}

export default Portfolio