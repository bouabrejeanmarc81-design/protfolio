const competenceLink = document.querySelector('a[href="#competences"]');
const competenceTitle = document.querySelector('#competences');
const projectsLink = document.querySelector('a[href="#projets"]');
const projectsTitle = document.querySelector('.p3');
const contactLinks = document.querySelectorAll('a[href="#contact"]');
const contactTitle = document.querySelector('.p4');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

function highlightTitle(title) {
	title.classList.remove('is-highlighted');
	void title.offsetWidth;
	title.classList.add('is-highlighted');
}

competenceLink.addEventListener('click', () => highlightTitle(competenceTitle));
projectsLink.addEventListener('click', () => highlightTitle(projectsTitle));
contactLinks.forEach((link) => {
	link.addEventListener('click', () => highlightTitle(contactTitle));
});

contactForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	formStatus.textContent = 'Envoi en cours...';

	try {
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
