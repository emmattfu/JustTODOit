const template = document.createElement('template');
template.innerHTML = `
<style>
.todo-item {
    border: 1px solid #1976D2;
    padding: 10px;
    border-radius: 30px;
    margin-top: 20px;
    width: 500px;
}
</style>
<div class="todo-item">
    <p class="todo-item-text">text</p>
</div>
`

export default class Todo extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    render() {
        const temp = template.content.cloneNode(true);
        temp.querySelector('.todo-item-text').textContent = this.getAttribute('text')
        this.root.append(temp)
    }

    connectedCallback() {
        this.render()
    }
}