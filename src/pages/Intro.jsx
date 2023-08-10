import { useEffect, useRef, useState } from "react";
import "../styles/dist/intro.css"
import Star from "../components/Star"

const Intro = () => {
  const [starN, setStarN] = useState(50);
  const [stars, setStars] = useState([Star]);

  const starConRef = useRef(0);

  return (
    <div id="intro">
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