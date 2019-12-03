export default class Component {

    get dom() {
        this.anchor.innerHTML = this.render();
        this.setupListeners();
        return this.anchor
    }
}