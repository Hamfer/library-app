const [email, password] = document.querySelectorAll('form#login input');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('login');
const [emailError, passwordError] = document.querySelectorAll('span.error');
const loading = document.getElementById('loading');
const submitText = document.getElementById('submitText');
const togglePassword = document.getElementById('togglePassword');
const [emailLabel, passwordLabel] =
  document.querySelectorAll('form#login label');

email.addEventListener('input', () => {
  email.setAttribute('value', email.value);
});

password.addEventListener('input', () => {
  password.setAttribute('value', password.value);
});

togglePassword.addEventListener('click', () => {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.children[0].classList.toggle('fa-eye-slash');
});

const onRegister = () => {
  window.location.href = '/register';
};

let error = {};

const setLoading = isLoading => {
  if (isLoading) {
    loading.classList.add('opacity-100');
    submitText.classList.add('opacity-0');
    [email, password].forEach(input => {
      input.setAttribute('disabled', true);
    });
    return;
  }
  [email, password].forEach(input => {
    input.removeAttribute('disabled');
  });
  loading.classList.remove('opacity-100');
  submitText.classList.remove('opacity-0');
};

form.addEventListener('submit', e => {
  e.preventDefault();

  setLoading(true);

  checkEmpty();
});

const checkEmpty = () => {
  for (let key in error) {
    delete error[key];
  }
  [emailError, passwordError].forEach(el => {
    el.style.display = 'none';
  });

  [email, password].forEach(input => {
    input.classList.remove('border-red-500', 'text-red-500');
  });
  [emailLabel, passwordLabel].forEach(label => {
    label.classList.remove('text-red-500');
  });

  const [emailValue, passwordValue] = [email, password].map(el =>
    el.value.trim()
  );

  if (emailValue === '') {
    error.email = 'Email is required';
  } else {
    if (!emailValue.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
      error.email = 'Email must be a valid email';
    }
  }
  if (passwordValue === '') {
    error.password = 'Password is required';
  }

  if (Object.keys(error).length > 0) {
    displayError();
    setLoading(false);
  } else {
    submitButton.setAttribute('disabled', 'disabled');

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(submitForm());
      }, 2000);
    });
  }
};

const displayError = () => {
  if (error.email) {
    email.classList.add('border-red-500', 'text-red-500');
    emailLabel.classList.add('text-red-500');
    emailError.style.display = 'block';
    emailError.innerHTML = error.email;
  }
  if (error.password) {
    password.classList.add('border-red-500', 'text-red-500');
    passwordLabel.classList.add('text-red-500');
    passwordError.style.display = 'block';
    passwordError.innerHTML = error.password;
  }
};

const submitForm = () => {
  //TODO: Add an API ENDPOINT to send the data.

  submitButton.removeAttribute('disabled');

  setLoading(false);

  localStorage.setItem('loggedin', true);
  window.location.href = './dashboard';
};
