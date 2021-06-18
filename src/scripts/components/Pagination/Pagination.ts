import Error from '../Error'
import getDataApi from '../../utils/getDataApi'

class Pagination {
    url: string;
    insertNode: HTMLElement;

    constructor(url: string, insertNode: HTMLElement) {
        this.url = url;
        this.insertNode = insertNode;
    }

    private paginationRender(countPages: number) {
        let pagination: string = '',
            htmlWrapper: string;

        for (let i = 1; i <= countPages; i += 1) {
            pagination += `
                <button class="pagination__page">${i}</button>
            `;
        }

        htmlWrapper = `
            <div class="container">
                <div class="pagination">
                    ${pagination}
                </div>
            </div>
        `;

        this.insertNode.innerHTML = '';
        this.insertNode.insertAdjacentHTML('beforeend', htmlWrapper);
    }

    async render() {
        let data;

        try {
            data = await getDataApi(this.url);
            data = data.info.pages;
            this.paginationRender(data);
        } catch {
            Error.render();
        }
    }
}

export default Pagination