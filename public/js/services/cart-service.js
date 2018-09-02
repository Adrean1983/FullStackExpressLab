"use strict";
function CartService($http) {
  const vm = this;
  vm.cartItemList = [];
  vm.setAllItems = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then((response) => {
      vm.cartItemList = response.data;
      console.log(vm.cartItemList);
      return vm.cartItemList;
    });
  };
  vm.getAllItems = () => {
    return vm.cartItemList;
  }
  vm.addItem = (item) => {
      return $http({
        url: "/cart-items",
        method: "POST",
        data: item
      }).then((response) => {
        vm.cartItemList = response.data;
        return vm.cartItemList;
      })
  }
  vm.removeItem = (id) => {
    return $http({
      url: "/cart-items/" + id,
      method:"DELETE",
    }).then((response) => {
      vm.cartItemList = response.data;
      return vm.cartItemList;
    })
  }

  vm.updateItem = (newItem) => {
    return $http({
      url: "/cart-items/" + newItem.id,
      method: "PUT",
      data: newItem
    }).then((response) => {
      vm.cartItemList = response.data;
      return vm.cartItemList;
    })
  }
//   vm.updateResults = (victory) => {
//     return $http({
//       url: "/results",
//       method: "POST",
//       data: victory
//     }).then((response) => {
//       vm.user = response.data;
//       return vm.user;
//     });
//   };
}

angular
  .module("App")
  .service("CartService", CartService);