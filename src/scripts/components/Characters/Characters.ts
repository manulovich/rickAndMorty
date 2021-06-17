import { urlCharacter, queryPage } from './../../constants/api-url'
import { CHARACTERS } from '../../constants/root'
import getDataApi from './../../utils/getDataApi'
import Error from './../Error'
import Person from './../../type/Person'

class Characters {
    renderCharacters(data: Person[]) {
        let personList: string = '',
            htmlWrapper: string;

        data.forEach(({name, image}) => {
            personList += `
                <li class="persons-list__person person">
                    <span class="person__name" title=${name}>${name}</span>
                    <span class="person__avatar">
                        <img src="${image}" alt="${name}">
                    </span>
                </li>
            `;
        });

        htmlWrapper = `
            <main class="main">
                <div class="container" id="js-insert-point">
                    <ul class="persons-list">
                        ${personList}
                    </ul>
                </div>
            </main>
        `;

        CHARACTERS.insertAdjacentHTML('beforeend', htmlWrapper);
    }

    async render(page: number = 1) {
        let data;

        try {
            data = await getDataApi(
                urlCharacter +
                queryPage +
                page.toString()
            );

            this.renderCharacters(data.results);
        } catch {
            Error.render();
        }
    }
}

export default new Characters()