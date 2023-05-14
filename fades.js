// Seleccionamos todos los elementos que tienen el atributo "example-fade"
const elements = document.querySelectorAll('[example-fade]');

// Creamos un observer para detectar cuándo los elementos están en el viewport
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;
			const fadeType = element.getAttribute('example-fade');
			const fadeDirection = element.getAttribute('example-direction');

			element.style.opacity = 0;

			switch (fadeDirection) {
				case 'right':
					element.style.transform = 'translateX(-15px)';
					break;
				case 'left':
					element.style.transform = 'translateX(15px)';
					break;
				case 'top':
					element.style.transform = 'translateY(15px)';
					break;
				case 'bottom':
					element.style.transform = 'translateY(-15px)';
					break;
				default:
					element.style.transform = 'translateY(15px)';
					break;
			}

			switch (fadeType) {
				case 's':
					element.style.transition = 'opacity 800ms ease-in-out 200ms';
					element.style.opacity = '0.7';
					break;
				case 'm':
					element.style.transition = 'opacity 800ms ease-in-out 200ms';
					element.style.opacity = '0.7';
					break;
				case 'l':
					element.style.transition = 'opacity 1600ms ease-in-out 200ms';
					element.style.opacity = '0.3';
					break;
				default:
					break;
			}

			element.style.transition =
				'opacity 800ms ease-in-out 200ms, transform 800ms ease-in-out 200ms';
			element.style.opacity = 1;

			observer.unobserve(element);
		}
	});
});

// Observamos todos los elementos
elements.forEach((element) => {
	observer.observe(element);
});

// Agregamos un listener para observar cuando se cargue el contenido
document.addEventListener('DOMContentLoaded', () => {
	// Observamos todos los elementos de nuevo en caso de que hayan sido añadidos dinámicamente
	elements.forEach((element) => {
		observer.observe(element);
	});
});
