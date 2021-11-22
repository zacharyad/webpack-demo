const button = document.getElementById('button');
// const click = require("./game.js") this is no good in the front end
 import click, {consoleThatLog as c, reset} from './game'
//  import {consoleThatLog as c, reset} from './game'

 c();
button.addEventListener('click', function() {
  clickTheButtonFunc();
});

/*  
    THREE MINUTES TO LOOK AT THESE FILES 
    AND THEN TELL ME WHAT WILL BE/IS GOING ON IN THE "APP".
*/

