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
		slideIn('fds-slide');
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
function slideIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	//Objeto con los valores que toma fds-fade
	const slideTransitions = {
		s: 0.2,
		m: 0.4,
		l: 0.8,
	};

	//Objeto con los valores que toma fds-direction
	const slideDirections = {
		top: 'translateY(-15px)',
		right: 'translateX(15px)',
	};

	elements.forEach((element) => {
		const slideType = element.getAttribute(selector);
		const slideDirection = element.getAttribute('fds-direction');

		element.addEventListener('mouseenter', () => {
			gsap.to(element, {
				duration: slideTransitions[slideType],
				transform: slideDirections[slideDirection],
			});
		});

		element.addEventListener('mouseleave', () => {
			gsap.to(element, {
				duration: slideTransitions[slideType],
				x: 0,
				y: 0,
			});
		});
	});
}
