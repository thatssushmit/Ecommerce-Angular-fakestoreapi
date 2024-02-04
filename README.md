# Store (Ecommerce App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Description
<!-- This is an Angular e-commerce app that fetches data from an API and allows users to login with a token that expires after 1 hour. The app also uses the ngx-skeleton-loader library to handle data loading and ngx-infinite-scroll to load more products as the user scrolls down the page. -->
This is an Angular E-commerce application that allows users to browse products, add products to cart.The application fetches product data through an API. It also implements the concept of lazy loading with the application divided into modules.

## Features


* Data loading using ngx skeleton loader.
* Infinite scrolling to load more products.
* Product details page.
* Product sorting by price and name.
* Product filtering by category.
* Add products to cart .
* Lazy loading of modules.

## Usage

Once the application is running, you can browse products, add products to cart . You can also sort products by price or name. The application uses ngx-infinite-scroll to load more products as the user scrolls down the page.


The application is divided into modulesand Lazy loading is used to optimize the loading of modules.





* Product List.
The app displays a list of products fetched from the API. When the user first loads the page, the ngx-skeleton-loader library is used to display a loading animation until the data is fetched from the API.

As the user scrolls down the page, the ngx-infinite-scroll library is used to load more products from the API. The app uses a pagination system to request the next page of products from the API.

* Product Details.
When the user clicks on a product in the list, they are taken to a page that displays the details of a product when the user clicks on the product card. The product details page displays the product name, price, description, and a list of related products. -->


## backend API 

Documentation for the backend API can be found [here](https://fakestoreapi.com/docs).

## Built with
* [Angular](https://angular.io/).
* [Typescript](https://www.typescriptlang.org/)
* [Ngneat/Hot-toast](https://ngneat.github.io/hot-toast/).
* [Bootstrap](https://getbootstrap.com/).
* [Fontawesome](https://fontawesome.com/).
* [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader).
* [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll).
* [rxjs](https://rxjs.dev/).

Please leave a ⭐ as motivation if you liked the implementation 😄

## Running the project

In the project directory, you can run:

#### `npm install`

To install all dependencies in package.json.

#### `npm serve`

It runs the app in the development mode.<br />
Open [http://localhost:4200](http://localhost:4200) to view it in the browser. 
## Contributing

If you want to contribute to this project, you can fork the repository and submit a pull request.
