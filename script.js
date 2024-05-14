let x = 0;
let container = document.querySelector(".containers");
document.addEventListener('DOMContentLoaded', function() {
    createBoxes();
  });

  function createBoxes(num) {
    document.querySelectorAll('.containers').forEach((div) => {
      for (var i = 0; i < num; i++) {
        let box = document.createElement('div');
        box.className = "gridSquare";
        box.onmouseover = function() {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
           box.style.transitionDuration = "0s";
           box.style.backgroundColor = "#" + randomColor;
        };
  
        box.onmouseout = function() {
          box.style.transitionDuration = "3s";
          box.style.backgroundColor = "black";
        }
        div.appendChild(box);
  
      }
  
    });
  }
function gridSize() {
    let answer = prompt("How many boxes do you want?")
    console.log(answer);
    createBoxes(answer) 
    return answer
}

  const btn = document.querySelector('.boxSize');
  btn.addEventListener('click', gridSize);
  

  const rst = document.querySelector('.resetButton');
  rst.addEventListener('click', function() {
    location.reload();
  });