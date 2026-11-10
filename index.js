const competenceTitle = document.querySelector('#competences');
const competenceSection = document.querySelector('.tools');
const projectsLinks = document.querySelectorAll('a[href="#projets"]');
const projectsTitle = document.querySelector('.p3');
const projectsSection = document.querySelector('.projects');
const contactLinks = document.querySelectorAll('a[href="#contact"]');
const contactTitle = document.querySelector('.p4');
const contactSection = document.querySelector('#contact');
const homeLinks = document.querySelectorAll('a[href="#top"]');
const homeTitle = document.querySelector('.hero h1');
const homeSection = document.querySelector('.hero');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const highlightTimers = new WeakMap();

function highlightElements(...elements) {
	elements.forEach((element) => {
		clearTimeout(highlightTimers.get(element));
		element.classList.remove('is-highlighted');
		void element.offsetWidth;
		element.classList.add('is-highlighted');
		highlightTimers.set(element, setTimeout(() => {
			element.classList.remove('is-highlighted');
			highlightTimers.delete(element);
		}, 2100));
	});
}

document.querySelector('a[href="#competences"]').addEventListener('click', () => {
	highlightElements(competenceTitle, competenceSection);
});
projectsLinks.forEach((link) => {
	link.addEventListener('click', () => highlightElements(projectsTitle, projectsSection));
});
contactLinks.forEach((link) => {
	link.addEventListener('click', () => highlightElements(contactTitle, contactSection));
});
homeLinks.forEach((link) => {
	link.addEventListener('click', () => highlightElements(homeTitle, homeSection));
});

contactForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	formStatus.textContent = 'Envoi en cours...';

	try {
		// contactForm.action vaut maintenant l'adresse Formspree, car l'action est sur CE formulaire
		const response = await fetch(contactForm.action, {
			method: 'POST',
			body: new FormData(contactForm),
			headers: { 'Accept': 'application/json' }
		});

		if (response.ok) {
			formStatus.textContent = 'Merci ! Votre message a bien été envoyé.';
			contactForm.reset();
		} else {
			formStatus.textContent = 'Erreur, veuillez réessayer.';
		}
	} catch (error) {
		formStatus.textContent = 'Erreur de connexion, veuillez réessayer.';
	}
});