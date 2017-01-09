myApp.component('navbar', {
  templateUrl: '/js/navbarComponent/navbar.html',
  controller: function() {
    console.log('hello from navbar');
  }
});
// myApp.controller('logout', function(Auth, $state) {
//     this.Auth = Auth;
//     this.$state = $state;
//
//     this.logout = function() {
//         this.Auth.logout()
//             .then( res => {
//             this.$state.go('login');
//     });
//     };
// });
