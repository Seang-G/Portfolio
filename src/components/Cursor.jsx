import "../styles/dist/cursor.css"

const Cursor = ({posX, posY}) => {
  

  return(
    <div id="cursor" style={{top: posY-55, left: posX-55}}>
      　
    </div>
  );
}

export default Cursor