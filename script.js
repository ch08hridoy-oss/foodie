const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      siteNav.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      siteNav.classList.remove('is-open');
    }
  });
}

const yearElement = document.getElementById('current-year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

const projectForm = document.getElementById('project-form');
const formNote = document.getElementById('form-note');

if (projectForm) {
  projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!projectForm.reportValidity()) return;

    // Change this to your preferred Business SP contact email before publishing, if needed.
    const businessEmail = 'hridoyakralmulhouqe@gmail.com';
    const data = new FormData(projectForm);
    const name = String(data.get('name') || '').trim();
    const brand = String(data.get('business') || '').trim();
    const replyEmail = String(data.get('email') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subject = encodeURIComponent(`Business SP project enquiry — ${service}`);
    const body = encodeURIComponent(
      `Hello Business SP,\n\nI'd like to discuss a project.\n\nName: ${name}\nBusiness / brand: ${brand || 'Not provided'}\nReply email: ${replyEmail}\nService: ${service}\n\nProject details:\n${message}\n\nThank you.`
    );

    if (formNote) {
      formNote.textContent = 'Your email app should open with the enquiry details ready. Review the message and send it from your email app.';
    }
    window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  });
}
