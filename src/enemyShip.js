import Ship from "./ship.js";
import {EVENT_RENDER, SIZE} from "./constants";


// Вражеский корабль(синий квадрат)
export default class EnemyShip extends Ship{
    constructor(container, offsetLeft = 0){
        super(container);
        this.square.style.left = `${offsetLeft * SIZE}px`;
    }

    COLOR = "#00f";

    initialize(){
        const interval = setInterval(() => {
            if(this.offset < 9){
                this.offset++;
                document.dispatchEvent(EVENT_RENDER);
            } else {
                clearInterval(interval);
                this.remove();
                document.dispatchEvent(EVENT_RENDER);
            }
        }, 1000);
    }

    setOffset(){
        this.square.style.top = `${SIZE * this.offset}px`;
    }

    remove(){
        this.square.remove();
        super.remove();
    }
}