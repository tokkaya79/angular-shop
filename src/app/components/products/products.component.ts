import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private ProductsService: ProductsService) { }

  products: IProducts[]
  productsSubscription: Subscription

  basket: IProducts[]
  basketSubscription: Subscription

  ngOnInit(): void {
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => { this.products = data})

    this.basketSubscription = this.ProductsService.getProductsToBasket().subscribe((data) => this.basket = data)
  }


  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe()
    if (this.basketSubscription) this.basketSubscription.unsubscribe()
  }

  addToBasket(product: IProducts) {
    product.quantity = 1

    let findItem
    if (this.basket.length > 0 ) {
      findItem = this.basket.find((item) => item.id === product.id)
      if (findItem) this.updateToBasket(findItem)
      else this.postToBasket(product)
    } else this.postToBasket(product)


  }

  postToBasket(product: IProducts) {
        this.ProductsService.postProductToBasket(product).subscribe((data) => this.basket.push(data))
  }

  updateToBasket(product: IProducts) {
    product.quantity += 1
    this.ProductsService.updateProductsToBasket(product).subscribe((data) => {})
  }

}
