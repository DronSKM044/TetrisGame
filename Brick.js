export class Brick{
    
    constructor(posX = 0, gameFieldHeight, gameField){
        this.brick;
        this.brickWidth = 30; 
        this.brickHeight = 30;
        this.x=0;
        this.timeoutCounter = 0;
        this.left = 0;
        this.right =0;
        this.posX= posX;
        this.gameFieldHeight = gameFieldHeight;
        this.gameField = gameField;
        this.movebled = true;
        this.increaseSpeed = 500
    }
    createBrick(){
        this.brick = document.createElement('div');
        this.brick.classList.add('brick');
        return this.brick;
    }
    
    moveDown(){
        if(this.x == this.gameFieldHeight) return this.movebled = false
        // console.log(this.brick.offsetTop);
        // console.log(this.x); 
        this.brick.style.top = this.x + "px"; 
        this.x += 30;
       this.timeoutCounter = setTimeout(this.moveDown.bind(this),this.increaseSpeed)
       document.addEventListener('keydown', (e)=>{
        if(e.key.toLowerCase() === "arrowdown") {
           return this.increaseSpeed = 50;
        } 
    })
      document.addEventListener('keyup', (e)=>{
        if(e.key.toLowerCase() === "arrowdown") {
            return this.increaseSpeed = 500;
         } 

      })
       
    }
    moveLeft(){
        document.addEventListener('keydown', (e)=>{
            if(this.posX < 0 + this.brickWidth) return
            if(e.key.toLowerCase() === "arrowleft"){
               if(this.movebled==false) return
               console.log(this.posX)
               this.posX-=30
               this.brick.style.left = this.posX+"px"
           }
        })

    }
    moveRight(){
        document.addEventListener('keydown', (e)=>{
            if(this.posX == this.gameField.clientWidth -this.brickWidth) return
            if(e.key.toLowerCase() === "arrowright"){
                if(this.movebled==false) return
                console.log(this.posX)
                this.posX+=30;
                this.brick.style.left = this.posX+"px"
            }
        })
    }

}