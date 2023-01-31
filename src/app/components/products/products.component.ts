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

  ngOnInit(): void {
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => { this.products = data})
  }


  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe()
  }

  addToBasket(product: IProducts) {
    this.ProductsService.postProductToBasket(product).subscribe((data) => console.log(data)
    )

  }

}
