import ApiComponent from '../ApiComponent';
import PageError from '../PageError'
import getDataApi from '../../utils/getDataApi'

class Pagination extends ApiComponent {
    _renderComponent(countPages: number) {
        let pagination: string = '',
            htmlWrapper: string;

        for (let i = 1; i <= countPages; i += 1) {
            pagination += `
                <button class="pagination__page">${i}</button>
            `;
        }

        htmlWrapper = `
            <div class="pagination">
                ${pagination}
            </div>
        `;

        this.insertNode.innerHTML = '';
        this.insertNode.insertAdjacentHTML('beforeend', htmlWrapper);
    }

    async render(url: string) {
        let data;

        try {
            data = await getDataApi(url);
            this._renderComponent(data.info.pages);
        } catch {
            PageError.render();
        }
    }
}

export default Pagination