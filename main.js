let screenArea = document.getElementById("body");


function createArrow(e){
  let randNum = Math.floor(Math.random() * 2);
  if (randNum === 0) {
    let leftArrow = document.createElement("div");
    leftArrow.id = "arrowLeft";
    screenArea.appendChild(leftArrow);
    setTimeout(function(){
      screenArea.removeChild(leftArrow);
    }, 1000)
    } else {
    let rightArrow = document.createElement("div");
    rightArrow.id = "arrowRight";
    screenArea.appendChild(rightArrow);
    setTimeout(function(){
      screenArea.removeChild(rightArrow);
    }, 1000)
  }
  console.log(randNum);
}

screenArea.addEventListener("click", createArrow);
