import Todo from './Todo.js';
import Component from './Component.js'

customElements.define('todo-item', Todo);

export default class List extends Component {
    constructor() {
        this.todos = ['Wash my car', 'Learn JS', 'Say hello to Jess']
        this.onInit();  
    }

    onInit() {
        this.render()
        let form = document.querySelector('.add-todo-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.todos.push(form.elements[0].value)
            this.render();
        })
    }

    get todos() {
        return this.todosArray
    }

    onTodosChange() {
       console.log(1)
    }

    set todos(value) {
        this.todosArray = value
        this.onTodosChange()
    }

    addTodo(elem) {
        this.todosArray.push(elem)
    }

    render() {
        let todoList = document.querySelector('.list')
        todoList.innerHTML = '';
        this.todosArray.forEach(el => {
            let item = document.createElement('todo-item');
            item.setAttribute('text', el)
            todoList.append(item);
        })
    }

    setupListeners() {

    }
}