function fadeIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	const fadeTransforms = {
		s: 'translateY(15px)',
		m: 'translateY(30px)',
		l: 'translateY(60px)',
	};

	const fadeTransitions = {
		s: 'opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms',
		m: 'opacity 600ms ease-in-out 200ms, transform 600ms ease-in-out 200ms',
		l: 'opacity 800ms ease-in-out 200ms, transform 800ms ease-in-out 200ms',
	};

	elements.forEach((element) => {
		const fadeType = element.getAttribute(selector);
		element.style.opacity = 0;
		element.style.transform = fadeTransforms[fadeType];
		element.style.transition = fadeTransitions[fadeType];
	});

	console.log('js cargado');

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
