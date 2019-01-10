import Element from "./game-element";
import {SIZE, EVENT_RENDER} from "./constants";

const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;


// Наш корабль(красный квадрат)
class Ship extends Element{
    constructor(container){
        super(container);
        this.initialize();
    }

    square = document.createElement("div")
    offset = 0
    COLOR = "#f00"

    initialize(){
        document.addEventListener("keydown", this.onKeyDown);
        this.square.style.bottom = "0px";
    }

    onKeyDown = (event) => {
        if(event.keyCode == ARROW_LEFT && this.offset > 0){
            this.offset--;
            document.dispatchEvent(EVENT_RENDER);
        } else if(event.keyCode == ARROW_RIGHT && this.offset < 9){
            this.offset++;
            document.dispatchEvent(EVENT_RENDER);
        } else {
            // Ничего
        }
    }

    setOffset(){
        this.square.style.left = `${SIZE * this.offset}px`;
    }

    render(){
        // 1. Убрать из DOM существующий объект(чтобы не было клона)
        this.square.remove();

        // 2. Изменить стиль смещения (style: left)
        this.setOffset();

        // 3. Отрисовать другие стили
        this.square.style.width = `${SIZE}px`;
        this.square.style.height = `${SIZE}px`;
        this.square.style.position = "absolute";
        this.square.style.backgroundColor = this.COLOR;
        this.container.append(this.square);
    }
}

export default Ship;