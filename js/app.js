import List from './List.js';
import Router from './Router.js';

// let key = 1;

// if (key) {
//   document.querySelector('.login').style.display = 'none';
// }

const router = new Router(document.body)

window.addEventListener('changeRoute', (event) => {
  router.changeRoute(event.detail.route);
  console.log(event)
})

window.dispatchEvent(new CustomEvent('changeRoute', {detail: {route: 'login'}}));

