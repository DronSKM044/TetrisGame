import { Brick } from './Brick.js'
class Game {
 constructor({gameField, scoreField, menuField}){
    this.gameField = gameField;
    this.scoreField = scoreField;
    this.menuField = menuField;
 }

 createBtn(){
     const btn = document.createElement('button');
     btn.innerHTML = "start";
     this.menuField.appendChild(btn);
 }

 start(){
    this.createBtn();
    const brick =  new Brick();
    this.gameField.appendChild(brick.createBrick());
 };
}

const game= new Game({
    gameField: document.getElementById('field'),
    scoreField:document.getElementById('score'),
    menuField:document.getElementById('menu'),
});
game.start();