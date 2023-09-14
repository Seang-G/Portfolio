import "../styles/dist/cursor.css"

const Cursor = ({posX, posY}) => {
  

  return(
    <div>
    <div id="cursor1" style={{top: posY-25, left: posX-25}}>
      　
    </div>
    <div id="cursor2" style={{top: posY-50, left: posX-50}}>
      　
    </div>
    </div>
  );
}

export default Cursor