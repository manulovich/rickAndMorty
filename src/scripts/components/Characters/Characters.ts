import getDataApi from './../../utils/getDataApi'
import Error from './../Error'
import Person from './../../type/Person'

class Characters {
    insertNode: HTMLElement;

    constructor(insertNode: HTMLElement) {
        this.insertNode = insertNode;
    }

    private renderCharacters(data: Person[]) {
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

        this.insertNode.insertAdjacentHTML('beforeend', htmlWrapper);
    }

    async render(url: string) {
        let data;

        try {
            data = await getDataApi(url);
            this.renderCharacters(data.results);
        } catch {
            Error.render();
        }
    }
}

export default Characters