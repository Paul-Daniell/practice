mybutton.addEventListener("click", function () {
  alert("change the blue to red background werkt niet!!!");
});

const toggleColor = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("red-background");
};
const attachEventToChangeColorButton = function () {
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", function () {
    toggleColor();
  });
};

toggleColor();
attachEventToChangeColorButton();
