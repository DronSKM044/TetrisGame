const brickData = {
  width: 50,
  hight: 50,
  brick: document.querySelector(".brick"),
  stepsX: 0,
  stepsY: 0,
};
class Brick {
  constructor() {
    this.brick = brickData.brick;
  }

  moveRight() {
    if (brickData.stepsX == 450 || brickData.stepsY == 650) return;
    console.log(brickData.stepsX);
    brickData.stepsX = brickData.stepsX + 50;
    this.brick.style.left = `${brickData.stepsX}px`;
    console.log("right");
  }
  moveLeft() {
    if (brickData.stepsX == 0 || brickData.stepsY == 650) return;
    brickData.stepsX = brickData.stepsX - 50;
    this.brick.style.left = `${brickData.stepsX}px`;
    console.log("left");
  }
  controls() {
    document.addEventListener("keydown", (e) => {
      const moveX = e.key.toLowerCase();
      if (moveX == "arrowright") this.moveRight();
      else if (moveX == "arrowleft") this.moveLeft();
    });
  }
  moveDown() {
    if (brickData.stepsY == 650) return;
    brickData.stepsY = brickData.stepsY + 50;
    this.brick.style.top = `${brickData.stepsY}px`;
  }
}
