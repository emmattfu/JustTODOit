import LoginComponent from './Login.js';
import TodoComponent from './List.js';

export default class Router {
    constructor(anchor) {
        this.anchor = anchor;
        this.routerConfig = {
            'login': {
                'data': {},
                'url': 'login',
                'component': LoginComponent
            },
            'todoList': {
                'data': {},
                'url': 'todoList',
                'component': TodoComponent
            }
        }
    }

    changeRoute(route) {
       
        const conf = this.routerConfig[route]

        if(!conf) return;

        const component = new conf.component();

        const dom = component.dom;
       
        if (this.currentComponent) {
            this.anchor.innerHTM = '';
            this.anchor.appendChild(dom)
        } else {
            this.anchor.appendChild(dom)
        }

        this.currentComponent = dom
    }
}