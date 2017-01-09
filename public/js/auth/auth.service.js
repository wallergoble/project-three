console.log('hello from auth services');



// angular.module('myApp').factory('AuthService',
//     ['$q', '$timeout', '$http',
//         function ($q, $timeout, $http) {
//
//             // create user variable
//             var currentUser = null;
//
//             // return available functions for use in the controllers
//             return ({
//                 isLoggedIn: isLoggedIn,
//                 getUserStatus: getUserStatus,
//                 login: login,
//                 logout: logout,
//                 register: register
//             });
//
//         }]);
//
// function isLoggedIn() {
//     if(user) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function getUserStatus() {
//     return user;
// }
//
// function login(email, password) {
//
//     // create a new instance of deferred
//     var deferred = $q.defer();
//
//     // send a post request to the server
//     $http.post('/user/login',
//         {email: email, password: password})
//     // handle success
//         .success(function (data, status) {
//             if(status === 200 && data.status){
//                 user = true;
//                 deferred.resolve();
//             } else {
//                 user = false;
//                 deferred.reject();
//             }
//         })
//         // handle error
//         .error(function (data) {
//             user = false;
//             deferred.reject();
//         });
//
//     // return promise object
//     return deferred.promise;
//
// }
// function register(username, password) {
//
//     // create a new instance of deferred
//     var deferred = $q.defer();
//
//     // send a post request to the server
//     $http.post('/user/signup',
//         {firstName: firstName, lastName: lastName, email: email, password: password})
//     // handle success
//         .success(function (data, status) {
//             if(status === 200 && data.status){
//                 deferred.resolve();
//             } else {
//                 deferred.reject();
//             }
//         })
//         // handle error
//         .error(function (data) {
//             deferred.reject();
//         });
//
//     // return promise object
//     return deferred.promise;
//
// }


angular.module('myApp')
    .service('Auth', function($http, $q) {

        var currentUser = null;

        this.getCurrentUser = function() {
            return $http.get('/me')
                    .then(res => {
                    currentUser = res.data;
        })
            .catch(err => {
                console.log('ERROR:', err);
            return $q.reject(err.data);
        });
        };

        this.getCurrentUserSync = function() {
            return currentUser;
        };

        this.isLoggedIn = function() {
            return currentUser !== null;
        };

        this.login = function(credentials) {
            return $http.post('/login', credentials)
                    .then(res => {
                    currentUser = res.data;
        })
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

        this.createUser = function(user) {
            return $http.post('/signup', user)
                    .then(res => {
                    currentUser = res.data;
        })
            .catch(err => {
                console.log('ERROR:', err);
            return $q.reject(err.data);
        });
        };

        this.getCurrentUser();
    });