const brush1 = function () {
  console.log("the backWall is painted red");
};

brush1();

const brush2 = function (color) {
  console.log("The backWall is painted " + color);
};

brush2("purple");

const brush3 = function (wall, color) {
  console.log("the " + wall + "wall has painted " + color);
};

brush3("back", "red");
brush3("front", "purple");

brush3("red", "back");
brush3("purple", "front");
