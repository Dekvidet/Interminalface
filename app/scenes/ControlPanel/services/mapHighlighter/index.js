export const addHighlightClass = (selector, selectorClass = 'highlight') => {
	const collection = document.getElementById('map').contentDocument.getElementsByClassName(selector);
	for (let i = 0; i < collection.length; ++i) {
		collection[i].classList.add(selectorClass);
	}
};

export const removeHighlightClass = (selector, selectorClass = 'highlight') => {
	const collection = document.getElementById('map').contentDocument.getElementsByClassName(selector);
	for (let i = 0; i < collection.length; ++i) {
		collection[i].classList.remove(selectorClass);
	}
};