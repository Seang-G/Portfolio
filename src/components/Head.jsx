import { useEffect, useRef, useState } from "react"
import {motion} from "framer-motion"
import Star from "./Star"

export default function Head() {
  const starN = 100

  const starConRef = useRef(0)
  const satellite = useRef(0)
  
  const [mousePos, setMousePos] = useState([1280, 720])

  const calcDeg = () => {
    return Math.atan2(mousePos[0]-175, mousePos[1]-175)*180/Math.PI
  }

  return (
    <div onMouseMove={e=>setMousePos([e.clientX, e.clientY])}>
      <div id="star-container" ref={starConRef}>
        {Array.from(Array(starN).keys()).map((idx)=>{
          return <Star 
          key={idx}
          starConRef={starConRef}
          />
        })}
      </div>
      <div id="head-title">
        <div>
          <motion.h1
            initial={{
              opacity:0.4,
              textShadow: "0px 0px 0px rgb(249, 245, 124)"
            }}
            whileHover={{
              opacity:1,
              textShadow: "0px 0px 10px rgb(249, 245, 124)"
            }}
          >
            Portfolio
          </motion.h1>
        </div>
        <div id="title-name-container">
          <div>　</div>
          <motion.h6
            initial={{
              opacity:0.4,
              textShadow: "0px 0px 0px rgb(12, 239, 255)"
            }}
            whileHover={{
              opacity:1,
              textShadow: "0px 0px 10px rgb(12, 239, 255)"
            }}
          >Min Jiwon</motion.h6>
        </div>
      </div>
      <img 
        ref={satellite}
        id="satellite"
        alt="satellite"
        src="/satellite.png"
        style={{rotate:`${-calcDeg()}deg`}}
      />
    </div>
  )
}