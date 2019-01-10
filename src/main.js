import Element from "./game-element";
const EVENT_RENDER = new Event("render");

class CustomElement extends Element{
    constructor(){
        super();
    }
    render(){
        document.writeln("Custom Element");
    }
}

document.addEventListener("render", () => {
    Element.subscribers.forEach((subscriber) => {
        subscriber.render();
    })
});

const test1 = new Element();
const test2 = new Element();
const test3 = new Element();
const test4 = new Element();

document.dispatchEvent(EVENT_RENDER);

const test5 = new CustomElement();

setTimeout(() => {
    document.dispatchEvent(EVENT_RENDER);
}, 5000);


