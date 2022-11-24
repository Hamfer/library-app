const isDark = () =>
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

const displayTheme = () => {
  if (isDark()) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  const sunIcon = document.querySelectorAll('.sun-icon');
  const moonIcon = document.querySelectorAll('.moon-icon');
  if (isDark()) {
    sunIcon.forEach(el => {
      el.classList.remove('sun-icon-light');
      el.classList.add('sun-icon-dark');
    });
    setTimeout(() => {
      moonIcon.forEach(el => {
        el.classList.remove('moon-icon-light');
        el.classList.add('moon-icon-dark');
      });
    }, 300);
  } else {
    moonIcon.forEach(el => {
      el.classList.remove('moon-icon-dark');
      el.classList.add('moon-icon-light');
    });
    setTimeout(() => {
      sunIcon.forEach(el => {
        el.classList.remove('sun-icon-dark');
        el.classList.add('sun-icon-light');
      });
    }, 300);
  }
};

window.addEventListener('load', () => {
  displayTheme();
});

displayTheme();

const setTheme = value => {
  localStorage.setItem(value);
  displayTheme();
};

const toggleTheme = () => {
  localStorage.setItem('theme', isDark() ? 'light' : 'dark');
  displayTheme();
};
