myApp.component('signup', {
    templateUrl: 'js/auth/signupComponent/signup.html',
    controller: function(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;

        this.signup = function(form) {
            this.submitted = true;

            if (form.$valid) {
                return this.Auth.signup({
                        // firstName: this.user.firstName,
                        // lastName: this.user.lastName,
                        username: this.user.username,
                        password: this.user.password
                    })
                        .then(() => {
                        // Account created, redirect to todos
                        $state.go('storyIndex');
                })
                .catch(err => {
                //     err = err.data;
                // this.errors = {};
                // Update validity of form fields that match the mongoose errors
            //     angular.forEach(err.errors, (error, field) => {
            //         form[field].$setValidity('mongoose', false);
            //     this.errors[field] = error.message;
            // });
                console.log(err);

                });
            }
        };
    }

});





