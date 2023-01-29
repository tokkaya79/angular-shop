import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketComponent } from './components/basket/basket.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BaseComponent } from './components/base/base.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {DialogModule} from '@angular/cdk/dialog';




@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ProductsComponent,
    ProductDetailComponent,
    BaseComponent,
    DialogBoxComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
