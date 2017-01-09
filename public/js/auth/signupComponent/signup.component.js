myApp.component('signup', {
<<<<<<< HEAD
    templateUrl: 'js/auth/signupComponent/signup.html',
    controller: function(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;

        this.register = function(form) {
            this.submitted = true;

            if (form.$valid) {
                return this.Auth.createUser({
                        firstname: this.user.firstname,
                        lastname: this.user.lastname,
                        email: this.user.email,
                        password: this.user.password
                    })
                        .then(() => {
                        // Account created, redirect to todos
                        this.$state.go('stories');
            })
            .catch(err => {
                    err = err.data;
                this.errors = {};
                // Update validity of form fields that match the mongoose errors
                angular.forEach(err.errors, (error, field) => {
                    form[field].$setValidity('mongoose', false);
                this.errors[field] = error.message;
            });
            });
            }
        };
    }

});




=======
  templateUrl: 'js/auth/signupComponent/signup.html',
  controller: function() {
    console.log('hello from the signup component');
  }
});
>>>>>>> 6ba607e714175bd73a2055095d2e92595dc2abf3
