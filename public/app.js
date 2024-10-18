'use strict'

import {MainPage as Feed} from './pages/main/main.js';

export class App {
    #root;
    #pins;

    constructor(root, pins) {
        this.#root = root;
        this.#pins = pins;
    }

    renderLayoutPage(route) {
        if (route === '/') {
            const mainPage = new Feed(this.#root);
            mainPage.renderTemplate(this.#pins);
        }
        else {
            this.#root.innerHTML = "<h1>Unknown page</h1>";
        }
    }
};
