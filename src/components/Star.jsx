import { useEffect, useState } from "react";
import "../styles/dist/star.css"

const Star = ({starConRef}) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [size, setSize] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [delay, setDelay] = useState(Math.random() * 5);
  

  const updateStar = () => {
    setPosX(Math.random() * (starConRef.current.clientWidth-30))
    setPosY(Math.random() * starConRef.current.clientHeight)
    setSize(Math.random() * 30)
    setRotate(Math.random() * 360)

    setTimeout(updateStar, 5000)
  }

  useEffect(()=>{
    setPosX(Math.random() * (starConRef.current.clientWidth-30))
    setPosY(Math.random() * starConRef.current.clientHeight)
    setSize(Math.random() * 30)
    setRotate(Math.random() * 360)
    setTimeout(updateStar, 5000+delay*1000)
  }, [])


  return(
    <span 
      id="star"
      style={{
        left: posX,
        top: posY,
        fontSize: size,
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${delay}s`,
      }}>
      .
    </span>
  );
}

export default Star