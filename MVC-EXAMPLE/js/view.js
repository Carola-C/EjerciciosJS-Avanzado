MVC.View = class View{
    constructor(elem){
        this.eventHandler();
        this.elem = elem;
    }
    eventHandler(){
        document.body.addEventListener('onLoadData', (event)=>{
            this.updateView(event.datail);
        });
    }
    notify(data){
        const onLoadDataevent = new CustomEvent("onLoadData",{detail:data, bubbles:true});
        this.elem.dispatchEvent(onLoadDataevent);
    }

    updateView(datos){
        for (let key in datos) {
            const node = this.elem.querySelector(`#${key}`);
            if (node != null) {
                console.log(node);
                node.value = datos[key];
            } else {
                console.log(`no se encontró ${key}`);
            }
        }
    }
}