'use strict';

export class MainPage {
	#root;
	
	constructor(root) {
		this.#root = root;
	}

	renderTemplate(pinset) {
		const template = Handlebars.templates['main.hbs'];
		const renderedTemplate = template({
			pins: pinset,
		});

		this.#root.innerHTML += renderedTemplate;

		return renderedTemplate;
	}
};
