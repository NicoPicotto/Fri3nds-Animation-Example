function fadeIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	elements.forEach((element) => {
		const fadeType = element.getAttribute(selector);
		element.style.opacity = 0;
		if (fadeType === 's') {
			element.style.transform = 'translateY(15px)';
		}
		if (fadeType === 'm') {
			element.style.transform = 'translateY(30px)';
		}
		if (fadeType === 'l') {
			element.style.transform = 'translateY(60px)';
		}
		element.style.transition =
			'opacity 800ms ease-in-out 200ms, transform 800ms ease-in-out 200ms';
	});

	console.log('Puto');

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const element = entry.target;
				observer.unobserve(element);
				fadeInElement(element);
			}
		});
	});

	elements.forEach((element) => {
		observer.observe(element);
	});

	function fadeInElement(element) {
		element.style.opacity = 1;
		element.style.transform = 'translateY(0)'; // regresar a la posición original
	}
}

document.addEventListener('DOMContentLoaded', function () {
	fadeIn('example-fade');
});
