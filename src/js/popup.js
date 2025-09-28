const openBtn = document.querySelector("[data-open_modal]");
const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector("[data-close_modal]");

const toggleModal = () => {
  modal.classList.toggle("is__hidden");
  document.body.classList.toggle("no__scrool");
};

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
