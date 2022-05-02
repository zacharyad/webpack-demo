let numTimesClicked = 0;

  function win() {
  alert('You win!');
  reset();
}

function reset() {
  numTimesClicked = 0;
}
    

function click() {
  numTimesClicked++;
  console.log("cat");
  if (numTimesClicked === 10) win();
}


  
/*
  1) look at simple App
  2) What are issues with this app?
  3) Make it secure
  4) Make it like node modules, to "share" code accross js files
  
*/

