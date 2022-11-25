const [username, fullname, email, password] = document.querySelectorAll(
  'form#register input'
);
const togglePassword = document.getElementById('togglePassword');
const form = document.getElementById('register');
const loading = document.getElementById('loading');
const [usernameError, fullnameError, emailError, passwordError] =
  document.querySelectorAll('span.error');
const [usernameLabel, fullnameLabel, emailLabel, passwordLabel] =
  document.querySelectorAll('form#register label');
const submitText = document.getElementById('submitText');

username.addEventListener('input', () => {
  username.setAttribute('value', username.value);
});

fullname.addEventListener('input', () => {
  fullname.setAttribute('value', fullname.value);
});

email.addEventListener('input', () => {
  email.setAttribute('value', email.value);
});

password.addEventListener('input', () => {
  password.setAttribute('value', password.value);
});

const onLogin = () => {
  window.location.href = '../login';
};

togglePassword.addEventListener('click', () => {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.children[0].classList.toggle('fa-eye-slash');
});

let error = {};

const setLoading = isLoading => {
  if (isLoading) {
    loading.classList.add('opacity-100');
    submitText.classList.add('opacity-0');
    [username, fullname, email, password].forEach(input => {
      input.setAttribute('disabled', true);
    });
    return;
  }
  [username, fullname, email, password].forEach(input => {
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
  [usernameError, fullnameError, emailError, passwordError].forEach(el => {
    el.style.display = 'none';
  });

  [username, fullname, email, password].forEach(input => {
    input.classList.remove('border-red-500', 'text-red-500');
  });
  [usernameLabel, fullnameLabel, emailLabel, passwordLabel].forEach(label => {
    label.classList.remove('text-red-500');
  });

  const [usernameValue, fullnameValue, emailValue, passwordValue] = [
    username,
    fullname,
    email,
    password,
  ].map(el => el.value.trim());

  if (usernameValue === '') {
    error.username = 'Username is required';
  }
  if (fullnameValue === '') {
    error.fullname = 'Fullname is required';
  }
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
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(submitForm());
      }, 2000);
    });
  }
};

const displayError = () => {
  if (error.username) {
    username.classList.add('border-red-500', 'text-red-500');
    usernameLabel.classList.add('text-red-500');
    usernameError.style.display = 'block';
    usernameError.innerHTML = error.username;
  }
  if (error.fullname) {
    fullname.classList.add('border-red-500', 'text-red-500');
    fullnameLabel.classList.add('text-red-500');
    fullnameError.style.display = 'block';
    fullnameError.innerHTML = error.fullname;
  }
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

  window.location.href = '../login';
};
