import Router from './Router.js';
import NewTodo from './NewTodo.js'
import Todo from './Todo.js';
import TodoInfo from './Todo-info.js';


customElements.define('todo-item', Todo);
customElements.define('new-todo', NewTodo);
customElements.define('todo-info', TodoInfo);

const router = new Router(document.querySelector('#main'));

window.addEventListener('changeRoute', (event) => {
  router.changeRoute(event.detail.route);
})

window.dispatchEvent(new CustomEvent('changeRoute', {detail: {route: 'login'}}));
