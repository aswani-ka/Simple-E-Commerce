# Simple E-Commerce Cart

A simple, clean e-commerce cart web app built with **HTML**, **CSS**, and **JavaScript**.  
Features adding/removing products, calculating total price, and saving cart items to **localStorage** so they persist after page reload.

## Features
- Display a list of products with prices
- Add products to the shopping cart
- Remove products from the shopping cart
- View total price dynamically
- Show an empty cart message when no items are present
- Cart data persists in **localStorage**

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla)

## How It Works
1. Products are displayed in the product list.
2. Clicking **Add to Cart** adds the product to the cart array.
3. The cart is re-rendered with updated total price and item list.
4. Clicking **Remove** deletes the item from the cart after confirmation.
5. Cart data is stored in `localStorage` so it’s available even after refreshing the page.