//Listener + Creación de scripts de GSAP
document.addEventListener('DOMContentLoaded', function () {
	// Creando script de GSAP en body
	var gsapScript = document.createElement('script');
	gsapScript.src =
		'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js';
	document.body.appendChild(gsapScript);

	// Creando script de ScrollTrigger en body
	var gsapTrigger = document.createElement('script');
	gsapTrigger.src =
		'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js';
	document.body.appendChild(gsapTrigger);

	//Llamada a la animación luego de que se carguen los scripts de GSAP
	gsapTrigger.onload = function () {
		fadeIn('fds-fade');
		slideIn('fds-slide', 'fds-slideTarget');
	};
});

//Animación Fade-In
function fadeIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	//Objeto con los valores que toma fds-fade
	const fadeTransitions = {
		s: 0.2,
		m: 0.4,
		l: 0.8,
	};

	//Objeto con los valores que toma fds-direction
	const fadeDirections = {
		top: 'translateY(-30px)',
		bottom: 'translateY(30px)',
		left: 'translateX(-30px)',
		right: 'translateX(30px)',
	};

	//GSAP trigger y observer
	gsap.registerPlugin(ScrollTrigger);

	elements.forEach((element) => {
		const fadeType = element.getAttribute(selector);
		const fadeDirection = element.getAttribute('fds-direction');
		gsap.fromTo(
			element,
			{
				opacity: 0,
				transform: fadeDirections[fadeDirection],
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				duration: fadeTransitions[fadeType],
				delay: 0.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
				},
			}
		);
	});
}

//Animación Slide-In
function slideIn(containerSelector, elementSelector) {
	const containers = document.querySelectorAll(`[${containerSelector}]`);

	// Objeto con los valores que toma fds-fade
	const slideTransitions = {
		s: 0.2,
		m: 0.4,
		l: 0.8,
	};

	// Objeto con los valores que toma fds-direction
	const slideDirections = {
		top: 'translateY(-10px)',
		bottom: 'translateY(10px)',
		left: 'translateX(-10px)',
		right: 'translateX(10px)',
	};

	containers.forEach((container) => {
		const slideType = container.getAttribute(containerSelector);
		const slideDirection = container.getAttribute('fds-direction');
		const element = container.querySelector(`[${elementSelector}]`);

		//Si el atributo "fds-target" existe, el efecto ocurre donde está aplicado
		if (element) {
			container.addEventListener('mouseenter', () => {
				gsap.to(element, {
					duration: slideTransitions[slideType],
					transform: slideDirections[slideDirection],
				});
			});

			container.addEventListener('mouseleave', () => {
				gsap.to(element, {
					duration: slideTransitions[slideType],
					x: 0,
					y: 0,
				});
			});

		//Si el atributo "fds-target" NO existe, el efecto ocurre donde existe el atributo "fds-slide"
		} else {
			container.addEventListener('mouseenter', () => {
				gsap.to(container, {
					duration: slideTransitions[slideType],
					transform: slideDirections[slideDirection],
				});
			});

			container.addEventListener('mouseleave', () => {
				gsap.to(container, {
					duration: slideTransitions[slideType],
					x: 0,
					y: 0,
				});
			});
		}
	});
}
