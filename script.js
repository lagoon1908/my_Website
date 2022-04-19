
var icon = document.getElementById("iconoDarkmode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        document.getElementById("moon").style.display = 'none';
        document.getElementById("sun").style.display = 'block';
    }
    else{
      document.getElementById("sun").style.display = 'none';
      document.getElementById("moon").style.display = 'block';
      }
 }
document.getElementById("moon").style.display = 'block';
document.getElementById("sun").style.display = 'none';

//COLORING LETTERS FOR HOVER BOOK CARDS
//Atomic Bomb
function Atomic_underline_on(){
    document.getElementById("theMaKingOfTheAtomicBomb").style.backgroundSize = "100% 3px";   };
function Atomic_underline_off(){
    document.getElementById("theMaKingOfTheAtomicBomb").style.backgroundSize = "0% 3px";   };
//Be Water
function beWater_underline_on(){
    document.getElementById("beWater").style.backgroundSize = "100% 3px";   };
function beWater_underline_off(){
    document.getElementById("beWater").style.backgroundSize = "0% 3px";   };
//Surely You're Joking Mr. Feynman
function MrFeynman_underline_on(){
        document.getElementById("MrFeynman").style.backgroundSize = "100% 3px";   };
function MrFeynman_underline_off(){
        document.getElementById("MrFeynman").style.backgroundSize = "0% 3px";   };
//Principles
function Principles_underline_on(){
    document.getElementById("Principles").style.backgroundSize = "100% 3px";   };
function Principles_underline_off(){
    document.getElementById("Principles").style.backgroundSize = "0% 3px";   };
//Steve Jobs
function Steve_underline_on(){
    document.getElementById("Steve").style.backgroundSize = "100% 3px";
    document.getElementById("Steve_2").style.backgroundSize = "100% 3px";  };
function Steve_underline_off(){
    document.getElementById("Steve").style.backgroundSize = "0% 3px";  
    document.getElementById("Steve_2").style.backgroundSize = "0% 3px";};
    //trevorNoah
function trevorNoah_underline_on(){
    document.getElementById("trevorNoah").style.backgroundSize = "100% 3px";   };
function trevorNoah_underline_off(){
    document.getElementById("trevorNoah").style.backgroundSize = "0% 3px";   };
    //Colorin Colorado
function colorinColorado_underline_on(){
    document.getElementById("colorinColorado").style.backgroundSize = "100% 3px";   
    document.getElementById("colorinColorado_2").style.backgroundSize = "100% 3px";};
function colorinColorado_underline_off(){
    document.getElementById("colorinColorado").style.backgroundSize = "0% 3px";   
    document.getElementById("colorinColorado_2").style.backgroundSize = "0% 3px";}