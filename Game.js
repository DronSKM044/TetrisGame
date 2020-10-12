const dataGame = {
  gameObj: [],
  itemCount: 10,
  startPositionX: 0,
  startPositionY: 0,
  interval: 1000,
  clearInteger: 0,
};

class Game {
  constructor() {}
  resetGame() {
    clearInterval(dataGame.clearInteger);
    brickData.stepsY = 0;
    brickData.stepsX = 0;
  }
  startGame() {
    for (let i = 0; i < 10; i++) {
      dataGame.gameObj.push(new Brick());
    }
    console.log(dataGame.gameObj);

    const elem = new Brick();
    this.resetGame();
    elem.controls();
    elem.brick.style.top = `${dataGame.startPositionY}px`;
    elem.brick.style.left = `${dataGame.startPositionX}px`;
    dataGame.clearInteger = setInterval(
      elem.moveDown.bind(elem),
      dataGame.interval
    );

    // elem.controls();
    // console.log(dataGame.gameObj.push(new Brick))
    // console.log(dataGame.gameObj)
  }
}
