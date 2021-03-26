const grid = document.getElementById("maze-area");

const player = document.getElementById("player");

const domRect = grid.getBoundingClientRect();


let leftPos = 262;
let topPos = 425;



startingPos = document.querySelector




// player

function getGridElementPosition(index) {

}





//  movement

document.addEventListener("keydown", event => {

  switch (event.keyCode) {

    case 39: // move right
      leftPos += 3;
      player.style.left = leftPos + 'px';
      return;   
    case 37: // move left
      leftPos -= 3;
      player.style.left = leftPos + 'px';
      return;
    case 40: // move down
      topPos += 3;
      player.style.top = topPos + 'px';
      return;
    case 38: // move up
      topPos -= 3;
      player.style.top = topPos + 'px';
      return;
  }


});




// win condition





// timer