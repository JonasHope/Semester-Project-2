export function clearElement(element) {
    while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
    }
}