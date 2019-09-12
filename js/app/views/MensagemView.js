class MensagemView {
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model) {

        return model.texto ? `<p class="alert alert-sucess">${model.texto}</p>` : '<p></p>';
    } 

    update(model){
        
        this._elemento.innerHTML = this._template(model);
    }
}