import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from '../../models/products';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(private ProductsService: ProductsService) {}

  basket: IProducts[];
  basketSubskription: Subscription;

  ngOnInit() {
    this.basketSubskription = this.ProductsService
      .getProductsToBasket()
      .subscribe((data) => {
        this.basket = data;
      });
  }

  ngOnDestroy() {
    if (this.basketSubskription) this.basketSubskription.unsubscribe()
  }

  minusItem(item: IProducts){

    if (item.quantity === 1) {
      this.ProductsService.removeItemFromBasket(item.id).subscribe(() => {
          let idx = this.basket.findIndex((data) => data.id === item.id)
          this.basket.splice(idx, 1)
      })
    } else {
    item.quantity -= 1
    this.ProductsService.updateProductsToBasket(item).subscribe((data) => {})

    }

  }

  plusItem(item: IProducts) {
    item.quantity += 1
    this.ProductsService.updateProductsToBasket(item).subscribe((data) => {})
  }
}
