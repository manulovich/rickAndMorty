import { URL_CHARACTER, QUERY_PAGE } from './scripts/constants/api-url'
import { CHARACTERS, MODAL_CONTENT, PAGINATION, ERROR } from './scripts/constants/root'
import Pagination from './scripts/components/Pagination'
import Modal from './scripts/components/Modal'

new Pagination(URL_CHARACTER, PAGINATION).render();
