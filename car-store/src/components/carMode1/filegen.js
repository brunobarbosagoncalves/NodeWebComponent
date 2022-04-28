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

    this.point = this.attachShadow({ mode: 'open' });
  }

  //interceptor change value attributes
  static get observedAttributes() {
    //attr intercepted
    return ['data', 'otherAttr'];
    //when this attrs change, call method "attributeChangedCallback"
  }

  //aux by getAttributeHtml
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

  //helper serialization
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
    this.render();

    /* Add mock event */
    // this.point
    //   .querySelectorAll('myReferenceDom')[0]
    //   .addEventListener('myEventName', () => {
    //     //my callback
    //   });
  }

  /*
  action: Called when the custom element are removed on DOM 
  idea: Remove all events and listeners here
  */
  disconnectedCallback() {
    console.log('==>disconnectedCallback');

    /* Remove mock event */
    /*
     this.point
     .querySelectorAll('myReferenceDom')[0]
     .removeEventListener('myEventName');
     */
  }

  /*
  action: Called when the custom element are moved to other document 
  idea: metrics
  */
  adoptedCallback() {
    console.log('==>adoptedCallback');
  }

  /*
  action: Called when the custom element are the attributes are added, removed or changed
  idea: rerender
  */
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback ==>', name, oldValue, newValue);

    if (name === 'data' && newValue !== oldValue) {
      //do anything
      this.render();
    }

    if (name === 'otherAttr' && newValue !== oldValue) {
      //do anything
      this.render();
    }
  }

  render() {
    //first lines because this replace all elements on this.point
    const data = this.getAttribute('data');
    const attrs = this.getAttributeHtml();
    ReactDom.render(<ComponentTarget data={data} {...attrs} />, this.point);

    //when use "attachShadow" => closed, only this mode we can add style on component
    const styleNode = document.createElement('style');
    styleNode.innerText = styleLocal.replace(/\n\r?/g, ' ');

    this.point.append(styleNode);
  }
}
export default CarWebComponent;

window.customElements.get('car-component-1') ||
  window.customElements.define('car-component-1', CarWebComponent);
