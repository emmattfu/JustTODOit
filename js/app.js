import Router from './Router.js';
import NewTodo from './NewTodo.js'
import Todo from './Todo.js';
import TodoInfo from './Todo-info.js';


customElements.define('todo-item', Todo);
customElements.define('new-todo', NewTodo);
customElements.define('todo-info', TodoInfo);


export default class Controller {
  constructor() {
    this.router = new Router(document.querySelector('#main'));
    this.onInit()
  }

  onInit() {
    this.setupEvents();
    window.dispatchEvent(new CustomEvent('changeRoute', {detail: {route: 'login'}}));
  }

  setupEvents() {
    window.addEventListener('changeRoute', (event) => {
      this.router.changeRoute(event.detail.route);
    })
  }
}

const controller = new Controller();