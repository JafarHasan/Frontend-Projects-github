const codes = document.querySelectorAll(".code");
// console.log(codes);
//initially focus on first inputs
codes[0].focus();

// codes.forEach((code, idx) => {
//   code.addEventListener("keydown", (e) => {
//     if (e.key >= 0 && e.key <= 9) {
//       setTimeout(() => codes[idx + 1].focus(), 10);
//     } else if (e.key === "Backspace") {
//       setTimeout(() => codes[idx - 1].focus(), 10);
//     }
//   });
// });

codes.forEach((code, idx) => {
  code.addEventListener("input", () => {
    if (code.value.length === 1 && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });
});
