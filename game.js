// IIFE --> phonetically iffy


  let numTimesClicked = 0;

  function win() {
    alert('You win!');
    reset();
  }

  // this gets put into an object
  export function reset() {
    numTimesClicked = 0;
  }
// this gets put into an object
  export function logSomeStuff(str){
    console.log("some stuff HEYHEYHEYHEYHEYHEY _________", str)
  }
    

// export  
 export default function() {
  numTimesClicked++;
  console.log("You clicked", numTimesClicked);
  if (numTimesClicked === 10) win();
}

// default exports this is a variable you can reference


// one default, and as many named exports as you want



// what is click = function() {
  //   numTimesClicked++;
  //   console.log("You clicked");
  //   if (numTimesClicked === 10) win();
  // }



/*
  1) look at simple App
  2) What are issues with this app?
  3) Make it secure
  4) Make it like node modules, to "share" code accross js files
  
  webpack = module bundler
  1) we need that sweet npm code
  2) we need to stell webpack what to do.
    webpack.config.js


*/

