class Element{
    // Если выбивает ошибку, возьми файлик .babelrc из репозитория
    static subscribers = []
    constructor(){
        Element.subscribers.push(this);
        console.log(Element.subscribers);
    }

    render(){
        document.writeln("Basic element");
    }
}

export default Element;