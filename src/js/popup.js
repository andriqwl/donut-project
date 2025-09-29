const openBtn = document.querySelector('[data-open_modal]');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-close_modal]');
const contactForm = document.querySelector('[data-contact_form]');

const closeModal = () => {
  modal.classList.add('is__hidden');
  document.body.classList.remove('no__scrool');
};

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  modal.classList.remove('is__hidden');
  document.body.classList.toggle('no__scrool');
  contactForm.reset();
});
closeBtn.addEventListener('click', closeModal);
