import ApiComponent from '../ApiComponent'
import getDataApi from './../../utils/getDataApi'
import PageError from '../PageError'
import Person from './../../type/Person'

class Characters extends ApiComponent {
    eventListener() {

    }

    _renderComponent(data: Person[]) {
        let personList: string = '',
            htmlWrapper: string;

        data.forEach(({name, image, id}) => {
            personList += `
                <li class="persons-list__person person" data-id=${id}>
                    <span class="person__name" title=${name}>${name}</span>
                    <span class="person__avatar">
                        <img src="${image}" alt="${name}">
                    </span>
                </li>
            `;
        });

        htmlWrapper = `
            <ul class="persons-list">
                ${personList}
            </ul>
        `;

        this.insertNode.innerHTML = '';
        this.insertNode.insertAdjacentHTML('beforeend', htmlWrapper);
    }
}

export default Characters