var app = angular.module("myApp", ['ui.router'])
.service('StoreService', function($http) {
  var service = {
    getAllStores: function() {
      return $http.get('/data/stores.json', { cache: true }).then(function(response) {
        return response.data;
      });
    },

    getStore: function(id) {
      function storeMatchesParam(store) {
          return store.id === id;
      }

      return service.getAllStores().then(function (stores) {
        return stores.find(storeMatchesParam)
      });
    }
  }

  return service;
})
.config(['$stateProvider', function ($stateProvider) {
    var states = [
        {
            name: 'stores',
            url: '/stores?searchValue',
            component: 'stores',
            resolve: {
                stores: function (StoreService) {
                    return StoreService.getAllStores();
                }
            }
        },
        {
            name: 'store',
            url: '/store/{storeId}',
            component: 'store',
            resolve: {
                store: function (StoreService, $transition$) {
                    return StoreService.getStore(Number($transition$.params().storeId));
                }
            }
        },
        {
            name: 'home',
            url: '/home',
            component: 'home'
        }
    ];
    states.forEach(function (state) {
        $stateProvider.state(state);
    });
}])
.component("home", {
    templateUrl: "/templates/home/home.component.html"
})
.controller('MainController', function () {
    var $this = this;
    $this.name = "Bob Jones";
});
