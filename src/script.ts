import { URL_CHARACTER, QUERY_PAGE } from './scripts/constants/api-url'
import { CHARACTERS, INFO, PAGINATION, ERROR } from './scripts/constants/root'
import Pagination from './scripts/components/Pagination'

new Pagination(URL_CHARACTER, PAGINATION).render();