"use strict";
const express = require("express");
const cartroute = express.Router();
const pool = require("../connection");


cartroute.get("/cart-items", (req, res) => {
    console.log("GET all.");
    pool.query("select * from ShoppingCart").then((result) => {
        console.log(result.rows)
        res.send(result.rows);
    });    
});

cartroute.get("/cart-items/:id", (req, res) => {
    pool.query("select * From ShoppingCart Where id=$1::int", [parseInt(req.params.id)]).then((result) => {
        console.log(result.rows)
        res.send(result.rows);
    });    
});

cartroute.post("/cart-items", (req, res) => {
    pool.query("insert into ShoppingCart(product, price, quantity) values ($1::text, $2::decimal, $3::int)", [req.body.product, req.body.price, req.body.quantity])
    .then(() => {
        pool.query("Select * from ShoppingCart").then((results) => {
            console.log(results.rows)
            res.send(results.rows);
        });
    });    
});

cartroute.put("/cart-items/:id", (req, res) => {
    console.log(req.param.id + '' + req.body);
    pool.query("Update ShoppingCart set quantity=$1::int where id=$2::int", [req.body.quantity, parseInt(req.params.id)]).then(() => {
        pool.query("Select * from ShoppingCart").then((results) => {
            console.log(results.rows)
            res.send(results.rows);
        });
    });
});
    // let count = 0;
    // for (let item in itemList) {
    //     if (item.id == req.params.id) {
    //         let updatedItem = {
    //             id: req.body.id,
    //             product: req.body.product,
    //             price: req.body.price,
    //             quantity: req.body.quantity,
                // id: Number(req.params.id)
            // }
            
            // itemList.splice(count, 1, updatedItem);
        // }
        // count++;
    // }
    // res.send(itemList);
// });

cartroute.delete("/cart-items/:id", (req, res) => {
    pool.query("Delete From ShoppingCart Where id=$1::int", [parseInt(req.params.id)]).then(() => {
        pool.query("Select * from ShoppingCart").then((results) => {
            console.log(results.rows)
            res.send(results.rows);
        });
    });
});
    // let count = 0;
    // for (let item of itemList) {
    //     if (item.id == req.params.id) {
    //         itemList.splice(count, 1);
    //     }
    //     // count++;
    // }
    // res.send(itemList);
// });

module.exports = cartroute;
