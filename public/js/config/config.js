"use strict";
angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/cart-items", {
        template: "<cart-items></cart-items>"
      })
    //   .when("/battleground", {
    //     template: "<battle-ground></battle-ground>"
    //   })
    //   .when("/results", {
    //     template: "<results></results>"
    //   })
      .otherwise({ redirectTo: "/cart-items" });
  });