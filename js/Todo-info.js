
let template = document.createElement('template');

template.innerHTML = `
<style>
.todo-info {
    padding: 20px;
    background-color: #1976D2;
   
}

.todo-info-text {
    color: white;
    font-size: 18px;
}
</style>
<div class="todo-info">
    <div class="todo-info-text" data-text="tasks">Tasks: 0</div>
    <div class="todo-info-text" data-text="finished-tasks">Finished tasks: 0</div>
    <div class="todo-info-text" data-text="in-progres-tasks">In progress tasks: 0</div>
</div>

`

export default class TodoInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
       
    }

    render(info) {
        const temp = template.content.cloneNode(true);
        temp.querySelector('[data-text=tasks]').textContent = `Tasks to do: ${this.getAttribute('tasks')}`
        this.shadowRoot.append(temp);
        
    }

    connectedCallback() {
        this.render();
      }
}