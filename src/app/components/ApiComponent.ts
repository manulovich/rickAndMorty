import PageError from './PageError'
import getDataApi from '../utils/getDataApi'
import Component from './Component'

class ApiComponent extends Component {
    _renderComponent(data) {
        console.log(new Error('method renderComponent not defined'))
    }

    async render(url: string) {
        let data;

        try {
            data = await getDataApi(url);
            this._renderComponent(data.results);
        } catch {
            PageError.render();
        }
    }
}

export default ApiComponent;