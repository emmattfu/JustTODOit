import Component from './Component.js';


export default class List extends Component {
    constructor(anchor) {
        super();

        this.anchor = anchor;
        this.todos = ['Wash my car', 'Learn JS', 'Say hello to Jess']
    }

    onInit() {

        this.anchor.addEventListener('submit', e => {
            e.preventDefault();
            this.addTodo(e.target.elements[0].value)
        })
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
        this.anchor.innerHTML = ''
        this.todosArray.push(elem);
        this.anchor.innerHTML = this.render();
        this.onTodosChange()
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

                        ${this.todosArray.map(el => `<todo-item text="${el}"></todo-item>`).reverse()}
                    </div>

                  
                    <todo-info tasks="${this.todosArray.length}"></todo-info>
                </div>
            </div>
        </div>
        `
    }

    setupListeners() {
     
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

      