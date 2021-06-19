import Person from '../../type/Person'
import getDataApi from '../../utils/getDataApi'
import ApiComponent from '../ApiComponent'
import PageNotification from '../PageNotification/PageNotification';
import { NOTIFICATION } from '../../constants/root'

class Modal extends ApiComponent {
    _renderComponent({ name, status, species, gender, image }: Person) {
        this.insertNode.innerHTML = '';

        this.insertNode.insertAdjacentHTML('beforeend', `
            <div class="modal__content content">
                <div class="content__person-avatar">
                    <img src="${image}" alßt="${name}">
                </div>

                <div class="content__main-info">
                    <p class="content__name content__info-item" title=${name}><span>Name: </span>${name}</p>
                    <p class="content__status content__info-item"><span>Status: </span>${status}</p>
                    <p class="content__species content__info-item"><span>Species: </span>${species}</p>
                    <p class="content__gander content__info-item"><span>Gender: </span>${gender}</p>
                </div>
            </div>
        `);
    }

    async render(url: string) {
        let data: Person;

        try {
            data = await getDataApi(url);
            
            this._renderComponent(data);
        } catch {
            new PageNotification(NOTIFICATION).render('Not data from characters');
        }
    }
}

export default Modal