import LoginComponent from './Login.js';
import TodoComponent from './List.js';

export default class Router {
    constructor(anchor) {
        this.anchor = anchor;
        this.routerConfig = {
            'login': {
                'data': {'route': 'login'},
                'url': 'login',
                'component': LoginComponent
            },
            'todoList': {
                'data': {'route': 'todoList'},
                'url': 'todoList',
                'component': TodoComponent
            }
        }

        window.addEventListener('popstate', e => {
            this.changeRoute(e.state.route)
        })
    }

    changeRoute(route) {
        const conf = this.routerConfig[route]
        if(!conf) return;
        window.history.pushState(conf.data, '', conf.url)

        const component = new conf.component();

        component.onInit()
        const dom = component.dom;
   
        if (this.currentComponent) {

            this.anchor.innerHTML = '';
            this.anchor.appendChild(dom)
        } else {
            this.anchor.appendChild(dom)
        }

        this.currentComponent = dom
    }
}