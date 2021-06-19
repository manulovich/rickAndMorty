import Characters from './components/Characters'
import Pagination from './components/Pagination'
import Modal from './components/Modal'
import { CHARACTERS, MODAL_CONTENT, PAGINATION } from './constants/root'
import { URL_CHARACTER, QUERY_PAGE } from './constants/api-url'

class App {
    characters: Characters;
    pagination: Pagination;
    modal: Modal;

    constructor(characters: Characters, pagination: Pagination, modal: Modal) {
        this.characters = characters;
        this.pagination = pagination;
        this.modal = modal;
    }

    private buttonEventListener() {
        const buttons: Element[] = [...this.pagination.insertNode.children[0].children];

        for (let button of buttons) {
            button.addEventListener('click', () => {
                this.characters.render(URL_CHARACTER + '/'+ QUERY_PAGE + button.innerHTML).then(() => {
                    this.characterEventListener();
                })
            })
        }
    }

    private characterEventListener() {
        const characters: Element[] = [...this.characters.insertNode.children[0].children]

        for (let character of characters) {
            character.addEventListener('click', () => {
                const parentNode: any = this.modal.insertNode.parentNode;
                const id: string = character.getAttribute('data-id');
                this.modal.render(URL_CHARACTER + '/' + id)
                parentNode.classList.toggle('modal--disabled')
            })
        }
    }

    private modalEventListener() {
        const modalParentNode: any = this.modal.insertNode.parentNode;

        modalParentNode.children[0].addEventListener('click', () =>  {
            modalParentNode.classList.toggle('modal--disabled');
        })
    }

    eventListener() {
        this.buttonEventListener();
        this.characterEventListener();
        this.modalEventListener();
    }

    async render() {
        await this.characters.render(URL_CHARACTER);
        await this.pagination.render(URL_CHARACTER);

        this.eventListener();
    }
}

export default App;