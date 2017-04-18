(function(angular) {
    'use strict';
    angular.module('myApp').component('store', {
        bindings: {
            store: '<'
        },
        templateUrl: "/templates/store/store.component.html"
    });
})(window.angular);
