import Todo from './Todo.js';
import Component from './Component.js'

customElements.define('todo-item', Todo);

export default class List extends Component {
    constructor() {
        super();
        this.anchor = document.createElement('div')
        this.todos = ['Wash my car', 'Learn JS', 'Say hello to Jess']
      
    }

    onInit() {
        console.log('list Init')
   
    }

    get todos() {
        return this.todosArray
    }

    onTodosChange() {
      
    }

    set todos(value) {
        this.todosArray = value
        this.onTodosChange()
    }

    addTodo(elem) {
        this.todosArray.push(elem)
    }

    render() {
        return `
        <div class="todo-list">
        <div class="container">
            <div class="todo-list-inner">
                    
                <div class="todo">
                    <h2 class="greating">Lets do them all!</h2>
                    <form class="add-todo-form">
                        <input class="form-control big" type="text" placeholder="New task">
                        <input class="form-control todo-form-submit" type="submit" value="Add task">
                    </form>
                    <div class="list">
                        ${this.todosArray.map(el => `<todo-item text="${el}"></todo-item>`)}
                    </div>
                </div>

                <div class="todo-info">
                    <div class="todo-info-text">Tasks: ${this.todos.length}</div>
                    <div class="todo-info-text">Finished tasks: 0</div>
                    <div class="todo-info-text">In progress tasks: 0</div>
                </div>
            </div>
        </div>
    </div>
        `
    }

    setupListeners() {
        this.anchor.querySelector('form').addEventListener('submit', e => {
            e.preventDefault();
            this.todos.push(this.anchor.querySelector('form').elements[0].value)
            
        })
    }
}



    // let todoList = document.querySelector('.list')
        // todoList.innerHTML = '';
        // this.todosArray.forEach(el => {
        //     let item = document.createElement('todo-item');
        //     item.setAttribute('text', el)
        //     todoList.append(item);
        // })


   

         // let form = document.querySelector('.add-todo-form');
        // form.addEventListener('submit', (e) => {
        //     e.preventDefault()
        //     this.todos.push(form.elements[0].value)
        //     this.render();
        // })