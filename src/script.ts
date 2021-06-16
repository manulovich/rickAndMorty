import Person from './scripts/type'
import { createElement, insertInParent } from './scripts/utils/documentUtils'
import insertInDomPersonListPoint from './scripts/insertPersonListinDom'

const url = 'https://rickandmortyapi.com/api/character';


fetch(url)
    .then(response => response.json())
    .then(data => app(data.results));

function app(persons: Person[]) {
    insertInDomPersonListPoint(
        document.getElementById('js-insert-point'),
        persons
    );
}