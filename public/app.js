'use strict'

import {MainPage as Feed} from './pages/main/main.js';

export class App {
    #parent;
    #pins;

    constructor(parent, pins) {
        this.#parent = parent;
        this.#pins = pins;
    }

    renderLayoutPage(route) {
        if (route === '/') {
            const mainPage = new Feed(this.#parent, this.#pins);
            mainPage.renderTemplate();
            mainPage.buildLayout();
        }
        else {
            this.#parent.innerHTML = "<h1>Unknown page</h1>";
        }
    }
};
