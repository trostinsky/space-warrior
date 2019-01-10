import Element from "./game-element";
import Ship from "./ship";
import EnemyShip from "./enemyShip";
import container from "./container";
import {EVENT_RENDER} from "./constants";
import {random} from "lodash";

const mainShip = new Ship(container);

const LEVEL = 3;

setInterval(() => {
    const randomCount = random(0, LEVEL);
    for(let i = 0; i < randomCount; i++){
        const randomPosition = random(0, 9);
        new EnemyShip(container, randomPosition);
    }
}, 3000);

// Слушаем событие render и вызываем метод render()
// для каждого из существующих элементов(см. Element)
document.addEventListener("render", () => {
    Element.subscribers.forEach((subscriber) => {
        subscriber.render();
    })
});

// Настраиваем начальное состояние приложения

document.dispatchEvent(EVENT_RENDER);


