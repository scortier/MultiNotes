export function renderToDOM(component, DOMElement) {
  component.onUpdate(listener);
  let child = component.render();
  DOMElement.innerHTML = "";//Change the attribute value of an HTML element
  DOMElement.appendChild(child);

  function listener() {
    if (child instanceof Node) {
      DOMElement.removeChild(child);
    }
    child = component.render();
    DOMElement.appendChild(child);
  }
}
