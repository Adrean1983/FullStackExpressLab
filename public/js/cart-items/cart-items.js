"use strict";
const cartItems = {
  templateUrl: `./js/cart-items/cart-items.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.setAllItems().then(() => {
      vm.cartItemList = CartService.getAllItems()
    });
    vm.addItemToList = (item) => {
      CartService.addItem(item).then((response) => {
        vm.cartItemList = response;
        return vm.cartItemList;
      });
        console.log(item);
      
      // console.log(CartService.addItem());
    };
    
    vm.deleteItemFromList = (id) => {
      CartService.removeItem(id).then((response) => {
        vm.cartItemList = response;
        console.log(id);
      });
    }

    vm.editItemFromList = (newItem) => {
      CartService.updateItem(newItem).then((response) => {
        vm.cartItemList = response;
        return vm.cartItemList;
      })
    }
    // vm.removeItemList = 
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