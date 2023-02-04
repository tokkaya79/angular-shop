import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ProductResolver } from 'src/services/product.resolver';

import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [

  {path: '', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailComponent, resolve: {data: ProductResolver}},
  {path: 'basket', component: BasketComponent},

  {path: '**', redirectTo: '', component: NotFoundError},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
