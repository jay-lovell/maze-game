const grid = document.getElementById("maze-area");

const player = document.getElementById("player");

const domRect = grid.getBoundingClientRect();
console.log(domRect);

const duck = document.getElementById("duck");

const wall = document.querySelectorAll(".maze-wall");



const startLeft = 1008;
const startTop = 560;

let leftPos = 1008;
let topPos = 550;




window.onload = startPos();

document.getElementById("reset").addEventListener("click", startPos);

function startPos() {
  player.style.left = startLeft + 'px';
  player.style.top = startTop + 'px';
  leftPos = startLeft;
  topPos = startTop;
};

// while(true) {
  // if (player.style.left > duck.left && player.style.left < duck.right && player.style.top > duck.top && player.style.top < duck.bottom) {
    // alert("You won");
  // }
// }



// player


function moveRight() {
  let tryPos = leftPos + 3;
  if (tryPos > (domRect.left + 25) && tryPos < (domRect.right - 48)) {
    leftPos += 3;
    player.style.left = leftPos + 'px';
  }
}


function moveLeft() {
  let tryPos = leftPos - 3;
  if (tryPos > (domRect.left + 25) && tryPos < (domRect.right - 45)) {
    leftPos -= 3;
    player.style.left = leftPos + 'px';
  }
}

function moveDown() {
  let tryPos = topPos + 3;
  if (tryPos > (domRect.top + 25) && tryPos < (domRect.bottom - 45)) {
    topPos += 3;
    player.style.top = topPos + 'px';
  }
}


function moveUp() {
  let tryPos = topPos - 3;
  if (tryPos > (domRect.top + 25) && tryPos < (domRect.bottom - 45)) {
    topPos -= 3;
    player.style.top = topPos + 'px';
  }
}



//  movement

document.addEventListener("keydown", event => {

  switch (event.keyCode) {

    case 39: // move right
      moveRight();
      winCheck();
      return;   
    case 37: // move left
      moveLeft();
      winCheck();
      return;
    case 40: // move down
      moveDown();
      winCheck();
      return;
    case 38: // move up
      moveUp();
      winCheck();
      return;
  }


});




// win condition


function winCheck() {
  let rect1 = player.getBoundingClientRect();
  let rect2 = duck.getBoundingClientRect();
  
  let overlap = !(rect1.right < rect2.left || 
                  rect1.left > rect2.right || 
                  rect1.bottom < rect2.top || 
                  rect1.top > rect2.bottom);

  if (overlap) {
    alert("You Win!");
  }
}




// timer

