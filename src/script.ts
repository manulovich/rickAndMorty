import App from './app'
import Characters from './app/components/Characters';
import Modal from './app/components/Modal';
import Pagination from './app/components/Pagination';
import { URL_CHARACTER } from './app/constants/api-url';
import { CHARACTERS, MODAL_CONTENT, PAGINATION } from './app/constants/root';

const app = new App(new Characters(CHARACTERS), new Pagination(PAGINATION), new Modal(MODAL_CONTENT));
app.render()