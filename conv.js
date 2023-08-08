


// typing animation sction 
var typed = new Typed('#element', {
  strings: ['"Celcius" To','"Fahrenhite" &','" Kelvin"'],
  typeSpeed: 275,
  loop: true,
loopCount: Infinity,
});







// document.getElementById("submit").onclick = convert;
document.getElementById("reset").onclick = reset;


var cel= document.getElementById("cel");
var fah= document.getElementById("fah");
var kel=document.getElementById("kel");
// celcius to fahrenhite and kelvin 

cel.addEventListener("input",function(){
let c =this.value;
let f =(c * 9/5) + 32;
let k =c +++ 273.15;


fah.value= f;
kel.value= k;
});

// farhenhite to celcius and kelvin 
fah.addEventListener("input",function(){
let f= this.value
let c=(f - 32) * 5/9;
let k=(f - 32) * 5/9 + 273.15;
cel.value=c;
kel.value=k;
}) ;


//  kelvin to celcius and fahrenhinte 
kel.addEventListener('input',function(){
let k=this.value
let c=k -273.15;
let f=(k - 273.15) * 9/5 + 32;
cel.value=c
fah.value=f

});




function reset() {
  document.getElementById("cel").value = 0;
  document.getElementById("fah").value = 0;
  document.getElementById("kel").value = 0;
}

