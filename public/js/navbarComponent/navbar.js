console.log('hello from navbar');

myApp.component('navbar', {
    templateUrl: '/js/navbarComponent/navbar.html',
    controller: function (Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;

        this.logout = function () {
            this.Auth.logout()
              .then(res => {
                 $state.go('index');
              });
        };
    }

});
