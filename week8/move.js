function myMove() {
  //reset inteval
  let id = null;
  //find red square
  const elem = document.getElementById("animate");
  //reset postion
  let pos = 0;
  clearInterval(id);
  //animation
  id = setInterval(frame, 5);

  function frame() {
    //end condition
    if (pos == 350) {
      clearInterval(id);
    } else {
      //move one px diagonally
      pos++;
      let posPx = pos + "px";
      elem.style.top = posPx;
      elem.style.left = posPx;
    }
  }
}
