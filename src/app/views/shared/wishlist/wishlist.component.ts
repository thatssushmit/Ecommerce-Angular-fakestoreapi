import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor
  (
 

  ){}
    

    

  closeSidebar() {
  
  }

  getWishList() {
  
  }
  

  getCartList() {
  
  }


  deleteWishItem() {

  }


  productInCartList(product: any){
 
  }

  addProductToCart(item: any) {
    console.log(item)

  }
  
  navigateToProductDetails(productId: string) {
 
  }

  openCofirmModal(productId: string) {

  }

  closeCofirmModal() {
  }

  ngOnInit(): void {
 
  }

}
