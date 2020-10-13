const dataGame = {
    gameObj: [],
    itemCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    interval: 1000,
    clearInteger: 0,
    board: document.querySelector('.board'),
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
            dataGame.gameObj.push(new Brick(i));
        }
        console.log(dataGame.gameObj[1]);

        // const elem = new Brick();
        this.resetGame();
        dataGame.gameObj[1].controls();
        dataGame.gameObj[1].brick.style.top = `${dataGame.startPositionY}px`;
        dataGame.gameObj[1].brick.style.left = `${dataGame.startPositionX}px`;
        dataGame.clearInteger = setInterval(
            dataGame.gameObj[1].moveDown.bind(dataGame.gameObj[1]),
            dataGame.interval
        );

        dataGame.board.appendChild(dataGame.gameObj[2].brick);

        // elem.controls();
        // console.log(dataGame.gameObj.push(new Brick))
        // console.log(dataGame.gameObj)
    }
}