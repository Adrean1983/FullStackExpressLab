"use strict";
function CartService($http) {
  const vm = this;
  vm.getAllItems = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then((response) => {
      vm.cartItemList = response.data;
      console.log(vm.cartItemList);
      return vm.cartItemList;
    });
  };
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

  vm.updateItem = (quantity, id) => {
    return $http({
      url: "/cart-items/" + id,
      method: "PUT",
      data: quantity
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