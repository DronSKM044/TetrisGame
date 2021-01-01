import { Brick } from './Brick.js'
class Game {
 constructor({gameField, scoreField, menuField}){
    this.gameField = gameField;
    this.scoreField = scoreField;
    this.menuField = menuField;
    this.btn = document.createElement('button');
    this.btnReset = document.createElement('button');
    this.btn.innerHTML = "start";
    this.btnReset.innerHTML = "reset";
    this.menuField.appendChild(this.btn);
    this.menuField.appendChild(this.btnReset);
 }
 
 init(){
    this.btn.addEventListener('click',()=>{
        this.start();
        this.reset();   
    })
 }
 // funkcja reset czyszcząca połe gry
 reset(){
    this.btnReset.addEventListener('click',()=>{
        while(this.gameField.firstChild){
            this.gameField.removeChild(this.gameField.firstChild);
        }

    })
 }

 start(){
    const brick =  new Brick(0,this.gameField.clientHeight, this.gameField);
    this.gameField.appendChild(brick.createBrick());
    brick.moveDown();
    brick.moveLeft();
    brick.moveRight();
    
    // console.log(this.gameField)
 };
}

const game= new Game({
    gameField: document.getElementById('field'),
    scoreField:document.getElementById('score'),
    menuField:document.getElementById('menu'),
});
game.init();