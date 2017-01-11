console.log('hello from auth services');

myApp.service('Auth', [ '$http','$q',
        function($http, $q) {

        var currentUser = null;

        this.getCurrentUser = function() {

            console.log(currentUser);
            return currentUser;
        };

        this.isLoggedIn = function() {

            return currentUser !== null;

        };

        this.login = function(credentials) {
            return $http.post('/login', credentials)
                    .then(res => {
                        currentUser = res.data;
                    console.log(currentUser);})
                    .catch(err => {
                        console.log('ERROR:', err);
                        return $q.reject(err.data);
                    });
        };

        this.logout = function() {
            return $http.get('/logout')
                    .then( res => {
                        currentUser = null;
                     });
        };

        this.signup = function(user) {
            return $http.post('/signup', user)
                    .then(res => {
                        currentUser = res.data;
                    })
                    .catch(err => {
                        console.log('ERROR:', err);
                        return $q.reject(err.data);
                    });

        };

}]);