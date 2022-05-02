const btn = document.getElementById('button');
import click, {logSomeStuff, reset} from './game.js'
import catSTring from './rando.js'
// node modules --> import from
// import click from './game.js'
// import {logSomeStuff, reset} from './game.js'

// entry is where all the code is going to be imported


btn.addEventListener('click', function() {
  click();
  loggy(catSTring)
});

/*  
    THREE MINUTES TO LOOK AT THESE FILES (main.js, index.html, )
    AND THEN TELL ME WHAT WILL BE/IS GOING ON IN THE "APP".
*/

