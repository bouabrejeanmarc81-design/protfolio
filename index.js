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

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(contactForm);
	const subject = `Message de ${formData.get('name')}`;
	const body = `Nom : ${formData.get('name')}\nE-mail : ${formData.get('email')}\n\n${formData.get('message')}`;
	const mailto = `mailto:bouabrejeanmarc81@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailto;
	formStatus.textContent = 'Votre logiciel de messagerie va s’ouvrir.';
});
