import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/models/products';
import {Subscription} from 'rxjs';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Dialog } from '@angular/cdk/dialog';
import { ProductsService } from 'src/services/products.service';


export interface DialogData {
  animal: 'panda'
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  products: IProducts[]
  product: IProducts
  productSubscription: Subscription

  constructor(private route: ActivatedRoute, public dialog: Dialog, private ProductsService: ProductsService) {}

  ngOnInit(): void {
     this.productSubscription = this.route.data.subscribe((data) => {
      this.product = data['data']
     })
  }

    openDialog(): void {
    this.dialog.open(DialogBoxComponent, {
      disableClose: true})
      // dialogRef.afterClosed().subscribe((data: any)=> this.postData(data))

  }

  postData(data: IProducts) {
    this.ProductsService.postProduct(data).subscribe((data:any) => this.products.push(data))

  }

}
