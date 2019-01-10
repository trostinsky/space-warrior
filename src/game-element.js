
// Главный класс для всего сущего в приложении
class Element{
    // Если выбивает ошибку, возьми файлик .babelrc из репозитория
    static subscribers = []

    constructor(container){
        this.container = container;
        Element.subscribers.push(this);
        console.log(Element.subscribers);
    }


    // Удаляет из массива для прорисовки
    remove(){
        console.log(this);
        Element.subscribers = Element.subscribers.filter((element) => (
            element !== this
        ))
    }

    render(){
        document.writeln("Basic element");
    }
}

export default Element;