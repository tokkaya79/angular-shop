import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, catchError, EMPTY } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProducts> {
  constructor(
    private ProductsService: ProductsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProducts> {
    return this.ProductsService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    );
  }
}
