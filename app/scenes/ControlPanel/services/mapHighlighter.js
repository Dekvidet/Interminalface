export const addHighlightClass = selector => {
	const collection = document.getElementById('map').contentDocument.getElementsByClassName(selector);
	for (let i = 0; i < collection.length; ++i) {
		collection[i].classList.add('highlight');
	}
};

export const removeHighlightClass = selector => {
	const collection = document.getElementById('map').contentDocument.getElementsByClassName(selector);
	for (let i = 0; i < collection.length; ++i) {
		collection[i].classList.remove('highlight');
	}
};