import Router from './Router.js';
import NewTodo from './NewTodo.js'
import Todo from './Todo.js';


customElements.define('todo-item', Todo);
customElements.define('new-todo', NewTodo);

const router = new Router(document.querySelector('#main'));

window.addEventListener('changeRoute', (event) => {
  router.changeRoute(event.detail.route);
})

window.dispatchEvent(new CustomEvent('changeRoute', {detail: {route: 'login'}}));
