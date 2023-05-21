//Fade-In Animation
function fadeIn(selector) {
	const elements = $(`[${selector}]`);

	const fadeTransitions = { s: 0.2, m: 0.4, l: 0.8 };
	const fadeDirections = {
		top: 'translateY(-30px)',
		bottom: 'translateY(30px)',
		left: 'translateX(-30px)',
		right: 'translateX(30px)',
	};

	gsap.registerPlugin(ScrollTrigger);

	elements.each(function () {
		const fadeType = $(this).attr(selector);
		const fadeDirection = $(this).attr('f3-direction');

		gsap.fromTo(
			this,
			{
				opacity: 0,
				transform: fadeDirections[fadeDirection] || 'none',
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				duration: fadeTransitions[fadeType] || 0,
				delay: 0.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: this,
					start: 'top 80%',
				},
			}
		);
	});
}

//Slide-In Animation
function slideIn(containerSelector, elementSelector) {
	const containers = $(`[${containerSelector}]`);

	const slideTransitions = { s: 0.2, m: 0.4, l: 0.8 };
	const slideDirections = {
		top: 'translateY(-10px)',
		bottom: 'translateY(10px)',
		left: 'translateX(-10px)',
		right: 'translateX(10px)',
	};

	containers.each(function () {
		const slideType = $(this).attr(containerSelector);
		const slideDirection = $(this).attr('f3-direction');
		const element = $(this).find(`[${elementSelector}]`);

		const animateIn = () => {
			gsap.to(element.length ? element : this, {
				duration: slideTransitions[slideType] || 0,
				transform: slideDirections[slideDirection] || 'none',
			});
		};

		const animateOut = () => {
			gsap.to(element.length ? element : this, {
				duration: slideTransitions[slideType] || 0,
				x: 0,
				y: 0,
			});
		};
		$(this).on('mouseenter', animateIn);
		$(this).on('mouseleave', animateOut);
	});
}

//Scale-Up Animation
function scaleUp(selector) {
	const elements = $(`[${selector}]`);
	const scaleValues = { s: 1.1, m: 1.2, l: 1.3 };

	elements.each(function () {
		const scaleType = $(this).attr(selector);
		$(this).on('mouseenter', () => {
			gsap.to(this, {
				duration: 0.3,
				scale: scaleValues[scaleType] || 1,
				ease: 'power2.out',
			});
		});

		$(this).on('mouseleave', () => {
			gsap.to(this, {
				duration: 0.3,
				scale: 1,
				ease: 'power2.out',
			});
		});
	});
}

//Rotate Animation
function rotate(selector) {
	const elements = $(`[${selector}]`);
	const rotateValues = { 90: 90, 180: 180, 360: 360 };

	elements.each(function () {
		const rotateType = $(this).attr(selector);
		$(this).on('mouseenter', () => {
			gsap.to(this, {
				duration: 0.3,
				rotation: rotateValues[rotateType] || 0,
				ease: 'power2.out',
			});
		});

		$(this).on('mouseleave', () => {
			gsap.to(this, {
				duration: 0.3,
				rotation: 0,
				ease: 'power2.out',
			});
		});
	});
}

//Hover-Bg Animation
function hoverBg(selector) {
	function adjustColor(color, amount) {
		return (
			'#' +
			color.replace(/^#/, '').replace(/../g, function (color) {
				const i = parseInt(color, 16);
				const iMax = Math.min(255, i + amount);
				const iMin = Math.max(0, i + amount);
				const newColor = i + amount > 255 ? iMax : iMin;
				return ('0' + newColor.toString(16)).slice(-2);
			})
		);
	}

	const elements = $(`[${selector}]`);

	elements.each(function () {
		const effectType = $(this).attr(selector);
		const originalColor = $(this).css('backgroundColor');
		const rgb = originalColor.match(/\d+/g);
		const originalColorHex = `#${(
			(1 << 24) +
			(parseInt(rgb[0]) << 16) +
			(parseInt(rgb[1]) << 8) +
			parseInt(rgb[2])
		)
			.toString(16)
			.slice(1)}`;

		// Adjust lightness/darkness factor as needed
		const factor = effectType === 'dark' ? -30 : 30;

		$(this).on('mouseenter', () => {
			const newColor = adjustColor(originalColorHex, factor);
			gsap.to(this, {
				duration: 0.2,
				backgroundColor: newColor,
				ease: 'power2.out',
			});
		});

		$(this).on('mouseleave', () => {
			gsap.to(this, {
				duration: 0.2,
				backgroundColor: originalColor,
				ease: 'power2.out',
			});
		});
	});
}

//Shadow Animation
function shadow(selector) {
	const elements = $(`[${selector}]`);

	const shadowValues = {
		s: '2px 2px 3px #A9A9A9',
		m: '4px 4px 5px #A9A9A9',
		l: '6px 6px 8px #A9A9A9',
	};

	elements.each(function () {
		const shadowType = $(this).attr(selector);
		$(this).on('mouseenter', () => {
			gsap.to(this, {
				duration: 0.2,
				boxShadow: shadowValues[shadowType] || '0px 0px 0px #000',
				ease: 'power2.out',
			});
		});

		$(this).on('mouseleave', () => {
			gsap.to(this, {
				duration: 0.2,
				boxShadow: '0px 0px 0px #000',
				ease: 'power2.out',
			});
		});
	});
}
