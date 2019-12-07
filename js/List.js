import Component from './Component.js';


export default class List extends Component {
    constructor(anchor) {
        super();
        this.countID = 0;
        this.anchor = anchor;
        this.todos = [ {'text': 'Wash my car', 'status': 'new', 'id': this.countID++},
        {'text': 'Learn JS', 'status': 'new', 'id': this.countID++}, 
        {'text': 'Say hello to Jess', 'status': 'done', 'id': this.countID++}]
    }

    onInit() {
        console.log('list Init')
    }

    get todos() {
        return this.todosArray
    }

    onTodosChange() {
      let newInfo = document.createElement('todo-info');
      newInfo.setAttribute('tasks', this.todosArray.length)
      let oldInfo = document.querySelector('todo-info');
      let parent = document.querySelector('.todo-list-inner')
      parent.replaceChild(newInfo, oldInfo)
    }

    set todos(value) {
        this.todosArray = value

    }

    addTodo(elem) {
        const newTodo = {'text': elem, 'status': 'new', 'id': this.countID++}
        this.anchor.innerHTML = ''
        this.todosArray.push(newTodo);
        this.anchor.innerHTML = this.render();
        this.onTodosChange()
    }

    deleteTodo(id) {
        this.todos = this.todosArray.filter(el => el.id !== +id)
        this.anchor.innerHTML = '';
        this.anchor.innerHTML = this.render()
    }

    changeStatus(id) {
        this.todosArray.forEach(el => {
            if (el.id === +id) {
                el.status === 'done' ? el.status = 'new' : el.status = 'done'
            }
        })

        this.anchor.innerHTML = '';
        this.anchor.innerHTML = this.render()
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
                        
                        ${this.todosArray.map(el => `<todo-item text="${el.text}" status="${el.status}" id="${el.id}">
                            <span slot="done"><i class="far fa-check-circle done"></i></span>
                            <span slot="delete"><i class="far fa-times-circle delete"></i></i></span>
                        </todo-item>`).reverse()}
                    </div>

                    <todo-info tasks="${this.todosArray.length}"></todo-info>
                </div>
            </div>
        </div>
        `
    }

    setupListeners() {
        this.anchor.addEventListener('submit', e => {
            e.preventDefault();
            this.addTodo(e.target.elements[0].value)
        })

        window.addEventListener('click', e => {
            
            if (e.target.classList.contains('delete')) {
                this.deleteTodo(e.target.closest('todo-item').getAttribute('id'))
            } else if (e.target.classList.contains('done')) {
                this.changeStatus(e.target.closest('todo-item').getAttribute('id'))
            }
          
        })
    }
}
