myApp.component('login', {
  templateUrl: 'js/auth/loginComponent/login.html',
  controller: function(Auth, $state) {
      this.Auth = Auth;
      this.$state = $state;
      this.errors = {};

      this.login = function(form) {
          this.submitted = true;

          if (form.$valid) {
              this.Auth.login({
                  email: this.user.email,
                  password: this.user.password
              })
                  .then(() => {
                  // Logged in, redirect to todos
                  this.$state.go('stories');
          })
          .catch(err => {
                  this.errors.login = err.message;
          });
          }
      };
  }

});
