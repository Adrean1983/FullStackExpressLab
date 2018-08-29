"use strict";
const cartItems = {
  templateUrl: `./js/cart-items/cart-items.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.cartItemList = response;
      console.log(vm.cartItemList);
    });
    // vm.selectPokemon = (id) => {
    //   PokemonService.getIndividualPokemon(id).then((response) => {
    //     vm.msg = `You have selected ${response.name}`;
    //   });
    // };
  }]
};

angular
  .module("App")
  .component("cartItems", cartItems);