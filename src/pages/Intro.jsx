import { useEffect, useRef, useState } from "react";
import "../styles/dist/intro.css"
import Star from "../components/Star"
import Cursor from "../components/Cursor"

const Intro = () => {
  const [starN, setStarN] = useState(50);
  const [stars, setStars] = useState([Star]);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const starConRef = useRef(0);
  const trackCursor = (e) => {
    setCursorX(e.clientX)
    setCursorY(e.clientY)
  }

  return (
    <div id="intro" onMouseMove={trackCursor}>
      <Cursor 
        posX={cursorX}
        posY={cursorY}
      />
      <div id="star-container" ref={starConRef}>
        {Array.from(Array(starN).keys()).map((idx)=>{
          return <Star 
            key={idx}
            starConRef={starConRef}
          />
        })}
      </div>
    </div>
  );
}

export default Intro