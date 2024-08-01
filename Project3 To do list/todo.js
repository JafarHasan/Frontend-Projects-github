const inpt = document.getElementById("inpt");
const list = document.getElementById("list-container");

function addTask() {
  if (inpt.value === "") {
    alert("You must add something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inpt.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inpt.value = "";
  saveData();
}
list.addEventListener(
  "click",
  function (e) {
    //LI should be in capital
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      const ans = confirm("Do you want to remove this?Click OK");
      if (ans) {
        e.target.parentElement.remove();
        saveData();
      }
    }
  },
  false
);

//to store data in local Storage
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
//display the data when website reopen
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();
