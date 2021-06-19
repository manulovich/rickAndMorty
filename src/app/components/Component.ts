class Component {
    insertNode: HTMLElement;

    constructor(insertNode: HTMLElement) {
        this.insertNode = insertNode;
    }

    render(any) {
        console.log(new Error('method render not defined'));
    }
}

export default Component;