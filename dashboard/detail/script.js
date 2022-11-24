const [urlImage, title] = document.querySelectorAll('form#editBook input');
const [description] = document.querySelectorAll('form#editBook textarea');
const modalEditBook = document.getElementById('modal-editbook');
const modalDeleteBook = document.getElementById('modal-deletebook');

const goBack = () => {
  history.back();
};

modalEditBook.addEventListener('click', e => {
  if (e.target.id === modalEditBook.id) {
    closeEditModal();
  }
});

const openEditModal = () => {
  const modalContent = modalEditBook.children[0];
  modalEditBook.classList.add('flex');
  modalEditBook.classList.remove('hidden');
  setTimeout(() => {
    modalEditBook.classList.remove('opacity-0');
    modalEditBook.classList.add('opacity-100');
  }, 300);
  setTimeout(() => {
    modalContent.classList.remove('-translate-y-[200%]');
    modalContent.classList.add('translate-y-0');
  }, 700);
};

const closeEditModal = () => {
  const modalContent = modalEditBook.children[0];
  modalContent.classList.remove('translate-y-0');
  modalEditBook.classList.remove('opacity-100');
  modalContent.classList.add('-translate-y-[200%]');
  modalEditBook.classList.add('opacity-0');
  setTimeout(() => {
    modalEditBook.classList.remove('flex');
    modalEditBook.classList.add('hidden');
  }, 700);
};

modalDeleteBook.addEventListener('click', e => {
  if (e.target.id === modalDeleteBook.id) {
    closeDeleteModal();
  }
});

const openDeleteModal = () => {
  const modalContent = modalDeleteBook.children[0];
  modalDeleteBook.classList.add('flex');
  modalDeleteBook.classList.remove('hidden');
  setTimeout(() => {
    modalDeleteBook.classList.remove('opacity-0');
    modalDeleteBook.classList.add('opacity-100');
  }, 300);
  setTimeout(() => {
    modalContent.classList.remove('-translate-y-[200vw]');
    modalContent.classList.add('translate-y-0');
  }, 700);
};

const closeDeleteModal = () => {
  const modalContent = modalDeleteBook.children[0];
  modalContent.classList.remove('translate-y-0');
  modalDeleteBook.classList.remove('opacity-100');
  modalContent.classList.add('-translate-y-[200vw]');
  modalDeleteBook.classList.add('opacity-0');
  setTimeout(() => {
    modalDeleteBook.classList.remove('flex');
    modalDeleteBook.classList.add('hidden');
  }, 700);
};
