import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/models/products';
import {Subscription} from 'rxjs';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Dialog } from '@angular/cdk/dialog';


export interface DialogData {
  animal: 'panda'
}


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})



export class ProductDetailComponent implements OnInit{

  product: IProducts
  productSubscription: Subscription

  constructor(private route: ActivatedRoute, public dialog: Dialog) {}


  ngOnInit(): void {
     this.productSubscription = this.route.data.subscribe((data) => {
      this.product = data['data']
     })
  }
    openDialog(): void {
    this.dialog.open(DialogBoxComponent, {
      minWidth: "300px",
      data: {
        animal: "panda"
      }
    });

  }
}
