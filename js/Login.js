import Component from './Component.js';

export default class Login extends Component {
    constructor(anchor) {
        super();
        this.anchor = document.createElement('div')
    }

    render() {
        return `
    <div class="login">
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
    </div>
    `
    }

    setupListeners() {
        
    }
}