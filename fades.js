function fadeIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	const fadeTransforms = {
		s: 'translateY(15px)',
		m: 'translateY(30px)',
		l: 'translateY(60px)',
	};

	elements.forEach((element) => {
		const fadeType = element.getAttribute(selector);
		element.style.opacity = 0;
		element.style.transform = fadeTransforms[fadeType];
		element.style.transition =
			'opacity 800ms ease-in-out 200ms, transform 800ms ease-in-out 200ms';
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
