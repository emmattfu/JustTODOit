import Component from './Component.js';

export default class Login extends Component {
    constructor(anchor) {
        super();
        this.anchor = anchor
    }

    onInit() {
        console.log('Login init')
    }

    render() {
        this.anchor.classList.add('login');

        return `
        <form class="login-form">
            <p class="login-title white-text">LOGIN</p>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input class="form-control" type="text" placeholder="Username">
            </div>
            <div class="form-group">
                <i class="fas fa-lock-open"></i>
                <input class="form-control" type="password" placeholder="Password">
            </div>
            
            <input class="form-control form-submit" type="submit" value="Login">
        </form>
   
    `
    }

    setupListeners() {
        this.anchor.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('changeRoute', {detail: {route: 'todoList'}}));
        })
    }
}