var app = new Vue({
  el: '#app',
  data: {
    errors: [],
    email: '',
    password: '',
    emails: ['sans87@inbox.ru', 'email@emal.com', 'examlpe@mail.de'],
    userConfirm: true
  },
  methods: {
    checkForm: function (e) {
      var length = this.password.length,
        checkBox = document.getElementById('confirm'),
        users = this.emails,
        newUser = this.email,
        emailField = document.querySelector('.form__input-error-email').parentNode,
        inputEmail = document.getElementById('email').parentNode,
        passField = document.querySelector('.form__input-error-password').parentNode,
        inputPassword = document.getElementById('password').parentNode,
        checkError = document.querySelector('.form__check-error');

      function newUserCheck(arr, elem) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === elem) {
            return false;
          }
        }
        return true;
      }
      this.userConfirm = newUserCheck(users, newUser);

      if (this.email && this.validEmail(this.email) && this.password && checkBox.checked && length > 3 && newUserCheck(users, newUser)) {
        return true;
      }

      this.errors = [];

      function addError(field, input) {
        field.style.display = "block";
        input.style.borderColor = "#e15433";
      }

      if (!this.email) {
        addError(emailField, inputEmail);
        emailField.firstChild.innerHTML = 'Введите почту';
      } else if (!this.validEmail(this.email)) {
        addError(emailField, inputEmail);
        emailField.firstChild.innerHTML = 'Адрес не корректный';
      }


      if (!this.password) {
        addError(passField, inputPassword);
        passField.firstChild.innerHTML = 'Введите пароль';
      }
      if (this.password && length < 4) {
        addError(passField, inputPassword);
        passField.firstChild.innerHTML = 'Пароль не менее 4х символов';
      }

      if (!checkBox.checked) {
        checkError.style.display = "block";
      }

      e.preventDefault();
    },

    validEmail: function (email) {
      var re = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
      return re.test(email);
    },
    deleteEmailError: function () {
      var emailField = document.querySelector('.form__input-error-email').parentNode,
        input = document.getElementById('email').parentNode;
      emailField.style.display = "none";
      input.style.borderColor = "#20a86b";
    },
    deletePasswordError: function () {
      var passField = document.querySelector('.form__input-error-password').parentNode,
        input = document.getElementById('password').parentNode;
      passField.style.display = "none";
      input.style.borderColor = "#20a86b";
    },
    deleteCheckError: function () {
      var checkError = document.querySelector('.form__check-error');
      checkError.style.display = "none";
    }
  }
});

module.exports = app;