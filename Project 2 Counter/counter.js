const prev = document.getElementById("prev");
const reset = document.getElementById("reset");
const next = document.getElementById("next");
let h1 = document.getElementById("head");
let cnt = 0;

//initial state
if (cnt === 0) {
  prev.disabled = true;
}

function nextHandle() {
  if (cnt < 101) {
    cnt++;
    h1.innerText = cnt;
    prev.disabled = false;
  }
  if (cnt == 100) {
    next.disabled = true;
  }
}

function prevHandle() {
  if (cnt > 0) {
    cnt--;
    h1.innerText = cnt;
    next.disabled = false;
  }
  if (cnt == 0) {
    prev.disabled = true;
  }
}

function resetHandle() {
  cnt = 0;
  h1.innerText = cnt;
  prev.disabled = true;
  next.disabled = false;
}
