mybutton.addEventListener("click", function () {
  alert("change the blue to red background werkt niet!!!");
});

const changeClassBlueBackground = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
};
const attachEventToChangeColorButton = function () {
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", function () {
    changeClassBlueBackground();
  });
};
