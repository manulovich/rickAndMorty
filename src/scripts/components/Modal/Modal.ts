import Person from '../../type/Person'
import getDataApi from "../../utils/getDataApi";
import PageNotification from '../PageNotification/PageNotification';

class Modal {
    insertNode: HTMLElement;

    constructor(insertNode: HTMLElement) {
        this.insertNode = insertNode;
    }

    private modalRender({ name, status, species, gender, image }: Person) {
        this.insertNode.innerHTML = '';

        this.insertNode.insertAdjacentHTML('beforeend', `
            <div class="content__person-avatar">
                <img src="${image}" alt="${name}">
            </div>

            <div class="content__main-info">
                <p class="content__name content__info-item" title=${name}><span>Name: </span>${name}</p>
                <p class="content__status content__info-item"><span>Status: </span>${status}</p>
                <p class="content__species content__info-item"><span>Species: </span>${species}</p>
                <p class="content__gander content__info-item"><span>Gender: </span>${gender}</p>
            </div>
        `);
    }

    async render(url: string) {
        let data: Person;

        try {
            data = await getDataApi(url);
            
            this.modalRender(data);
        } catch {
            new PageNotification('Not data from characters').render();
        }
    }
}

export default Modal