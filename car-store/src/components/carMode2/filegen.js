import React from 'react';
import ReactDom from 'react-dom';
import ComponentTarget from './index.js';

import reactToWebcomponent from 'react-to-webcomponent';

window.customElements.get('car-component-2') ||
  window.customElements.define(
    'car-component-2',
    reactToWebcomponent(ComponentTarget, React, ReactDom)
  );
