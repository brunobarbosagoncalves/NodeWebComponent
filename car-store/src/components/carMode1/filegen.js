import React from 'react';
import ReactDom from 'react-dom';
import ComponentTarget from './index.js';

import styleLocal from './styleLocal.js';

/**
 * @see: https://developer.mozilla.org/pt-BR/docs/Web/Web_Components
 */
class CarWebComponent extends HTMLElement {
  constructor() {
    super();

    this.point = document.createElement('div');

    this.point.setAttribute('class', 'car-root');

    this.point = this.attachShadow({ mode: 'closed' });

    this.close = this.close.bind(this);
  }

  convert(attrName, attrValue) {
    let value = attrValue;
    if (['true', 'false'].includes(attrValue)) value = attrValue === 'true';
    else if (!isNaN(attrValue) && attrValue !== '') value = +attrValue;
    else if (/^{.*}/.exec(attrValue)) value = JSON.parse(attrValue);
    return {
      name: attrName,
      value: value,
    };
  }

  getAttributeHtml() {
    return [...this.attributes]
      .filter((attr) => attr.name !== 'style')
      .map((attr) => this.convert(attr.name, attr.value))
      .reduce((props, prop) => ({ ...props, [prop.name]: prop.value }), {});
  }
  /*
  action: Called when the custom element are added on DOM 
  idea: Add all events and listeners here
  */
  connectedCallback() {
    //first lines because this replace all elements on this.point
    const data = this.getAttribute('data');
    const attrs = this.getAttributeHtml();
    ReactDom.render(<ComponentTarget data={data} {...attrs} />, this.point);

    //when use "attachShadow" => closed, only this mode we can add style on component
    const styleNode = document.createElement('style');
    styleNode.innerText = styleLocal.replace(/\n\r?/g, ' ');
    this.point.append(styleNode);
  }

  /*
  action: Called when the custom element are removed on DOM 
  idea: Remove all events and listeners here
  */
  disconnectedCallback() {
    this.shadowRoot
      .querySelector('button')
      .removeEventListener('click', this.close);
  }

  /*
  action: Called when the custom element are moved to other document 
  idea: metrics
  */
  adoptedCallback() {}

  /*
  action: Called when the custom element are the attributes are added, removed or changed
  idea: rerender
  */
  attributeChangedCallback() {}

  close() {
    this.open = false;
  }

  //interceptor change
  set open(isOpen) {
    const { shadowRoot } = this;

    if (isOpen) {
      //if open === true
    } else {
      //if open === false
    }
  }
}
export default CarWebComponent;

window.customElements.get('car-component-1') ||
  window.customElements.define('car-component-1', CarWebComponent);
