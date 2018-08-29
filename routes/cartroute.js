"use strict";
const express = require("express");
const cartroute = express.Router();
const itemList = require("../items/items");

// let idCount = itemList.length;

cartroute.get("/cart-items", (req, res) => {
    console.log("GET all.");
    res.send(itemList);
});

cartroute.post("/cart-items", (req, res) => {
    itemList.push({
        id: req.body.id,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        // id: idCount++
    });
    res.send(itemList);
});

cartroute.put("/cart-items/:id", (req, res) => {
    let count = 0;
    for (let item in itemList) {
        if (item.id == req.params.id) {
            let updatedItem = {
                id: req.body.id,
                product: req.body.product,
                price: req.body.price,
                quantity: req.body.quantity,
                // id: Number(req.params.id)
            }
            // itemList.splice(count, 1, updatedItem);
        }
        // count++;
    }
    res.send(itemList);
});

cartroute.delete("/cart-items/:id", (req, res) => {
    // let count = 0;
    for (let item of itemList) {
        if (item.id == req.params.id) {
            itemList.splice(count, 1);
        }
        // count++;
    }
    res.send(itemList);
});

module.exports = cartroute;

