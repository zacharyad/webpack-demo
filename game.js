  // IIFE, phonetically Iffy

    let numTimesClicked = 0;

     function win() {
      alert('You win!');
      reset();
    }

    export function consoleThatLog(){
      console.log("hey i was logged")
    }
    
    export function reset() {
      numTimesClicked = 0;
    }
    

  //)()


  // we can default export one thing and one thing only
export default function() {
  numTimesClicked++;
  console.log("cat");
  if (numTimesClicked === 10) win();
}


  // click() //  is equal to ---> 
    //function() {
    //   numTimesClicked++;
    //   console.log("You've been clicked.");
    //   if (numTimesClicked === 10) win();
    // }

 
  
  
/*
  1) look at simple App
  2) What are issues with this app?
  3) Make it secure
  4) Make it like node modules, to "share" code accross js files
  
  webpack = module bundler
  1) we need to install webpack and webpack-cli [ x ]
  2) add script to package.json to build your files into a bundle
  3) configure webpack


*/

