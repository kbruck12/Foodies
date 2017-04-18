(function(angular) {
    'use strict';
    angular.module('myApp').component('stores', {
        bindings: {
            stores: '<'
        },
        templateUrl: "/templates/store/stores.component.html",
        controller: function StoresCtrl ($http, $stateParams) {
            var $this = this;
            console.dir($stateParams);
            $this.searchValue = $stateParams.searchValue || "";
            $this.search = function () {
                var value = $this.searchValue.toLowerCase().trim();
                //if (value !== "") {
                    $this.results = $this.stores.filter(function (store) {
                        return (~store.company.toLowerCase().indexOf(value) ||
                            ~store.city.toLowerCase().indexOf(value) ||
                            ~store.state.toLowerCase().indexOf(value) ||
                            ~store.zip.toString().indexOf(value) ||
                            ~store.address.indexOf(value));
                    });
                //}
                //else {
                //    $this.results = [];
                //}
            };
            $this.$onInit = function () {
                $this.search();
            };
            $this.message = "Hello World!";
        }
    });
})(window.angular);
