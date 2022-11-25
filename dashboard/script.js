const body = document.querySelector('body');
const [urlImage, title] = document.querySelectorAll('form#addBook input');
const [description] = document.querySelectorAll('form#addBook textarea');
const [urlLabel, titleLabel] = document.querySelectorAll('form#addBook label');
const modalAddBook = document.getElementById('modal-addbook');
const buttonCloseModal = document.getElementById('close-modal');
const bookCarousel = document.getElementById('book-carousel');
const sideNav = document.getElementById('sidenav-overlay');
const sideNavMenu = document.getElementById('menu-sidenav');
const sideNavClose = document.getElementById('close-sidenav');
const form = document.getElementById('addBook');

var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  padding: '5rem',
  start: 1,
  pagination: false,
  width: '100vw',
});

splide.mount();

form.addEventListener('submit', e => {
  e.preventDefault();

  closeModal();
});

const openSideNav = () => {
  scrollToTop();
  body.classList.add('overflow-hidden');
  sideNav.classList.remove('hidden');
  sideNav.classList.add('flex');
  setTimeout(() => {
    sideNav.classList.add('translate-x-0');
    sideNav.classList.remove('-translate-x-[100vw]');
  }, 300);
};

const closeSideNav = () => {
  body.classList.remove('overflow-hidden');
  sideNav.classList.remove('translate-x-0');
  sideNav.classList.add('-translate-x-[100vw]');
  setTimeout(() => {
    sideNav.classList.add('hidden');
    sideNav.classList.remove('flex');
  }, 300);
};

sideNavMenu.addEventListener('click', () => {
  openSideNav();
});

sideNavClose.addEventListener('click', () => {
  closeSideNav();
});

modalAddBook.addEventListener('click', e => {
  if (e.target.id === modalAddBook.id) {
    closeModal();
  }
});

urlImage.addEventListener('input', () => {
  urlImage.setAttribute('value', urlImage.value);
});

title.addEventListener('input', () => {
  title.setAttribute('value', title.value);
});

const handleLogout = () => {
  window.location.href = '../login';
  localStorage.removeItem('loggedin');
};

const openModalAndCloseSideNav = () => {
  closeSideNav();
  setTimeout(() => {
    openModal();
  }, 300);
};

const openModal = () => {
  const modalContent = modalAddBook.children[0];
  scrollToTop();
  body.classList.add('overflow-hidden');
  modalAddBook.classList.add('flex');
  modalAddBook.classList.remove('hidden');
  setTimeout(() => {
    modalAddBook.classList.remove('opacity-0');
    modalAddBook.classList.add('opacity-100');
  }, 300);
  setTimeout(() => {
    modalContent.classList.remove('-translate-y-[200vw]');
    modalContent.classList.add('translate-y-0');
  }, 700);
};

const closeModal = () => {
  const modalContent = modalAddBook.children[0];
  body.classList.remove('overflow-hidden');
  modalContent.classList.remove('translate-y-0');
  modalAddBook.classList.remove('opacity-100');
  modalContent.classList.add('-translate-y-[200vw]');
  modalAddBook.classList.add('opacity-0');
  setTimeout(() => {
    modalAddBook.classList.remove('flex');
    modalAddBook.classList.add('hidden');
  }, 700);
};

const resize = () => {
  description.style.height = 'auto';
  description.style.height = description.scrollHeight + 'px';
};
/* 0-timeout to get the already changed text */
const delayedResize = () => {
  setTimeout(resize, 0);
};

['change', 'cut', 'paste', 'drop', 'keydown'].forEach(ev => {
  if (ev === 'change') {
    description.addEventListener(ev, resize);
    return;
  }
  description.addEventListener(ev, delayedResize);
});

const goToDetail = () => {
  window.location.href = './detail';
};

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
