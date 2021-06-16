const createElement = (tag: string, className: string = '', innerHTML: string = '') => {
    const element: Element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;

    return element;
}

const insertInParent = (parent: Element, ...children: Element[]) => {
    for (let child of children) {
        parent.insertAdjacentElement('beforeend', child);
    }

    return parent;
}

export {
    createElement,
    insertInParent
}