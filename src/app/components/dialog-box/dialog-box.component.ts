import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from '../product-detail/product-detail.component';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { IProducts } from 'src/app/models/products';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  product: IProducts;
  productSubscription: Subscription;
  myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    model: new FormControl(''),
    img: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
  });

  constructor(
    public dialogRef: DialogRef<DialogBoxComponent>,
    @Inject(DIALOG_DATA) public data: DialogData
  ) {}

  onSubmit() {
    console.log(this.myForm);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
