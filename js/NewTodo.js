import List from './List.js';

const template = document.createElement("template");

template.innerHTML = `
<style>
input[type="submit"] {
    cursor: pointer;
    outline: none;
}

.add-todo-form {
    width: 600px;
    display: inline-block;
 }
 
 .todo-form-submit {
     width: 20%;
     background-color: #1976D2;
     color: white;
     font: 400 18px 'Roboto';
     text-align: center;
     padding: 22px 0;
     border-radius: 10px;
     border: 1px solid white;
 }
 
 .greating {
     font-size: 40px;
     color: #1976D2; 
 }

 .form-control.big {
    width: 65%;
    background-color: #F1F3F2;
    padding: 20px 30px;
    border-radius: 10px;
    border: 2px solid white;
    font-size: 18px;
    font: 400 18px 'Roboto';
    margin-left: -20px;
}

.form-control.big:focus {
    border: 2px solid #1976D2;
    outline: none;
}



</style>
<h2 class="greating">Lets do them all!</h2>
<form class="add-todo-form">
    <input class="form-control big" type="text" placeholder="New task">
    <input class="form-control todo-form-submit" type="submit" value="Add task">
</form>
`

export default class NewTodo extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    render() {
        const temp = template.content.cloneNode(true);
      
        // temp.querySelector('form').addEventListener('submit', event => {
        //     event.preventDefault();
        //     const list = new List(document.createElement('div'));
        
        //     list.addTodo(this.root.querySelector('form').elements[0].value)
        // })
        this.root.append(temp);
    }

    connectedCallback() {
        this.render();
      }
}