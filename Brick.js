export class Brick{
    
    constructor(posX = 0){
        this.brick; 
        this.x=0;
        this.timeoutCounter = 0;
        this.left = 0;
        this.right =0;
        this.posX= posX;
    }
    createBrick(){
        this.brick = document.createElement('div');
        this.brick.classList.add('brick');
        return this.brick;
    }
    moveDown(downBorder){
        // if(this.x >= downBorder) console.log(downBorder);
        console.log(downBorder);
        // console.log(this.x); +
        this.brick.style.top = this.x + "px"; 
        this.x += 20;
       this.timeoutCounter = setTimeout(this.moveDown.bind(this),500)
       
    }
    moveLeft(){
        document.addEventListener('keydown', (e)=>{
           if(e.key.toLowerCase() === "arrowleft"){
               console.log(this.posX)
               this.posX-=10
               this.brick.style.left = this.posX+"px"
           }
        })

    }
    moveRight(){
        document.addEventListener('keydown', (e)=>{
            if(e.key.toLowerCase() === "arrowright"){
                console.log(this.posX)
                this.posX+=10;
                this.brick.style.left = this.posX+"px"
            }
        })
    }

}