function fadeIn(selector) {
	const elements = document.querySelectorAll(`[${selector}]`);

	//Objeto con los valores que toma fds-fade (utilizados en GSAP)
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

//Listener
document.addEventListener('DOMContentLoaded', function () {
	fadeIn('fds-fade');
});
