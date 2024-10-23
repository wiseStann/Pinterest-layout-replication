'use strict';

const DEFAULT_FULLPAGE_WIDTH = 1920;
const DEFAULT_COLUMNS_N_FOR_FULLPAGE = 7;

export class MainPage {
	#parent;
	#pins;

	constructor(parent, pins) {
		this.#parent = parent;
		this.#pins = pins;

		// Providing layout rebuild on resize events
		window.addEventListener('resize', (event) => {
			event.preventDefault();
			this.buildLayout();
		}, true);
	}

	renderTemplate() {
		const template = Handlebars.templates['main.hbs'];
		const renderedTemplate = template({
			pins: this.#pins,
		});

		this.#parent.innerHTML += renderedTemplate;

		return renderedTemplate;
	}

	buildLayout() {
		const columnsN = this.adaptiveColumnsN;
		const widthGutter = 40, heightGutter = 15;
		let heights = new Array(columnsN).fill(0);

		const columnWidth = (this.parentContainerWidth - widthGutter * (columnsN + 1)) / columnsN;

		for (const pin of this.#pins) {
			const pinContainer = document.getElementById(`pin__content-container-${pin.PinID}`);
			const pinImage = document.querySelector(`.pin__image-${pin.PinID}`);

			pinContainer.style.width = pinImage.style.width = `${columnWidth}px`;

			// Next column index to insert the pinContainer
			const minIdx = heights.indexOf(Math.min(...heights));

			pinContainer.style.top = `${heights[minIdx] + heightGutter}px`;
			pinContainer.style.left = `${minIdx * columnWidth + widthGutter * (minIdx + 1)}px`;

			heights[minIdx] += pinContainer.clientHeight + heightGutter;
		}

		const layoutContainer = document.querySelector('.feed__layout-container');
		layoutContainer.style.height = `${Math.max(...heights)}px`;
	}

	get parentContainerWidth() {
		return this.#parent.innerWidth || this.#parent.clientWidth;
	}

	get parentContainerColumnsRatio() {
		return DEFAULT_FULLPAGE_WIDTH / DEFAULT_COLUMNS_N_FOR_FULLPAGE;
	}

	get adaptiveColumnsN() {
		let newColumnN = Math.floor(this.parentContainerWidth / this.parentContainerColumnsRatio);
		if (newColumnN == 0)
			newColumnN = 1;
		return newColumnN;
	}
};
