function fadeIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	//Objeto con los valores que toma fds-fade
	const fadeTransitions = {
		s: 'opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms',
		m: 'opacity 600ms ease-in-out 300ms, transform 600ms ease-in-out 300ms',
		l: 'opacity 800ms ease-in-out 400ms, transform 800ms ease-in-out 400ms',
	};

	//Objeto con los valores que toma fds-direction
	const fadeDirections = {
		top: 'translateY(-30px)',
		bottom: 'translateY(30px)',
		left: 'translateX(-30px)',
		right: 'translateX(30px)',
	};

	//Loop general por los elementos que contienen el atributo fds-fade
	elements.forEach((element) => {
		const fadeType = element.getAttribute(selector);
		const fadeDirection = element.getAttribute('fds-direction');
		element.style.opacity = 0;
		element.style.transform = fadeDirections[fadeDirection];
		element.style.transition = fadeTransitions[fadeType];
	});

	//Observer para ver cuándo entra en viewport y retornar sus valores originales
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
		element.style.transform = 'translate(0)';
	}
}

//Listener
document.addEventListener('DOMContentLoaded', function () {
	fadeIn('fds-fade');
});
