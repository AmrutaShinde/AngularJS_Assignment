var sampleApp = angular.module('app', ['ngRoute']);
// var sampleApp = angular.module('mainApp', ['ngRoute','ngMockE2E']);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'features/home/home.html'               
            }).
            when('/About', {
                templateUrl: 'features/about/about.html'               
            }).
            when('/Sample', {
                templateUrl: 'features/post/post.html'               
            }).
            when('/Contact', {
                templateUrl: 'features/contact/contact.html'               
            }).
            when('/Login', {
                templateUrl: 'features/login/login.html'               
            }).
            when('/Signup', {
                templateUrl: 'features/signup/signup.html'               
            }).
            when('/Greeting', {
                templateUrl: 'features/sidebar/greetingCardCraft.html'               
            }). 
            when('/Object', {
                templateUrl: 'features/sidebar/objectCraft.html'               
            }).
            when('/Paper', {
                templateUrl: 'features/sidebar/paperCraft.html'               
            }).
            when('/Quilling', {
                templateUrl: 'features/sidebar/quillingCraft.html'               
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);