import Person from "../type";
import { createElement, insertInParent } from "../utils/documentUtils";

const createPersonPreview = (person: Person) => {
    const liPerson: Element = createElement('li', 'persons-list__person person'),
        namePerson: Element = createElement('span', 'person__name', person.name),
        avatarPerson: Element = createElement('span', 'person__avatar'),
        imgPerson: Element = createElement('img', 'person__avatar');

    imgPerson.setAttribute('src', person.image);
    imgPerson.setAttribute('alt', person.name);
    namePerson.setAttribute('title', person.name);

    liPerson.setAttribute('data-id', person.id.toString());

    insertInParent(
        liPerson,
        namePerson,
        insertInParent(
            avatarPerson,
            imgPerson
        )
    );

    return liPerson;
}

const createPersonList = (persons: Person[]) => {
    const node = createElement('ul', 'persons-list');

    persons.forEach((person: Person) => {
        insertInParent(
            node,
            createPersonPreview(person)
        )
    });

    return node;
}

const insertInDomPersonListPoint = (insertPoint: Element, persons: Person[]) => {
    insertPoint.innerHTML = '';
    insertInParent(
        insertPoint,
        createPersonList(persons)
    );
}

export default insertInDomPersonListPoint;