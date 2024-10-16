'use strict';

import App from './app.js';

const root = document.getElementById('root');

const pins = {

};

export const app = new App(root, pins);
app.renderLayoutPage(window.location.pathname);
