const template = document.createElement("template");
template.innerHTML = `
<style>
.todo-item {
    border: 1px solid #1976D2;
    padding: 10px 30px;
    border-radius: 30px;
    margin-top: 20px;
    width: 500px;
    font-size: 18px;
    transition: background-color .2s linear;
    display:flex;
    justify-content: space-between;
    align-items: center;
    overflow-x:hidden;
}

.todo-item[status="done"] {
  border: 1px solid #29F30E;
  transition: background-color .2s linear;
}

.todo-item[status="done"]:hover {
  background: #29F30E;
  color: white;
}

.todo-item:hover {
    background: #1976D2;
    color: white;
}

input {
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  outline: none;
}

</style>
<div class="todo-item">
    <slot name="done"></slot>
    <p class="todo-item-text"></p>
    <slot name="delete"></slot>
</div>



`;

export default class Todo extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = ''
    const temp = template.content.cloneNode(true);
    temp.querySelector(".todo-item-text").textContent = this.getAttribute("text");
    temp.querySelector('.todo-item').setAttribute('status', this.getAttribute('status'))
    this.root.append(temp);

  }

  editTodo() {
    this.shadowRoot.querySelector('.todo-item').addEventListener('click', e => {
      if (!this.shadowRoot.querySelector('form')) {
        let value = e.target.textContent.trim();
        let form = document.createElement('form');
        let input = document.createElement('input');
        input.value = value;
        input.setAttribute('autofocus', true);
        form.append(input);
        let paragraph = this.shadowRoot.querySelector('p');
        this.shadowRoot.querySelector('.todo-item').replaceChild(form, paragraph)
      }
      
      this.shadowRoot.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        let value = e.target.elements[0].value;
        this.setAttribute('text', value)
        this.render()
        this.editTodo()
      })
    })
  }

  connectedCallback() {
    this.render();
    this.editTodo()
  }
}
