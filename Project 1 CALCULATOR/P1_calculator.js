let display = document.getElementById("input");

//taking all buttons value by tagName button
let btns = document.querySelectorAll("button");
//converting btns Nodelist in array
let btnArray = Array.from(btns);

let string = "";
btnArray.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (event.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (event.target.innerHTML === "AC") {
      string = "";
      display.value = string;
    } else if (event.target.innerHTML === "=") {
      //eval conoverts string to code
      string = eval(string);
      display.value = string;
    } else {
      string += event.target.innerHTML;
      display.value = string;
      //console.log(event.target.innerHTML);//if press button 7 it gives 7
    }
  });
});

//NOTES

// btnArray.forEach(function(btn){
//     console.log(btn);
// });

//using arrow funtion
// btnArray.forEach(btn=>{
//     btn.addEventListener('click',function(event){
//         console.log(event.target);//if press button 7 it gives  <button>7</button>
//     });
// });
