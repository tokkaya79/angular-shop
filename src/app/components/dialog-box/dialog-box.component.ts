import { Component, Inject } from '@angular/core';
import { DialogData } from '../product-detail/product-detail.component';
import { DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})


export class DialogBoxComponent{
  constructor(
    @Inject(DIALOG_DATA) public data: DialogData) {}

 }
