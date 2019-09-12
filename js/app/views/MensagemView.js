class MensagemView extends View {

  constructor(elemento) {
    super(elemento)
  }

  _template(model) {

    return model.texto ? `<p class="alert alert-sucess">${model.texto}</p>` : '<p></p>';
  }
}