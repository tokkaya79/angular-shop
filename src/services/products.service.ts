import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProducts } from "src/app/models/products";

@Injectable({
  providedIn: "root"
})


export class ProductsService{

  url: string = 'http://localhost:3000/products'
  urlBasket: string = 'http://localhost:3000/basket'

  constructor(private http: HttpClient) {}

    getProducts() {
      return this.http.get<IProducts[]>(this.url)
    }


    getProduct(id: number) {
      return this.http.get<IProducts>(`${this.url}/${id}`)
    }

    postProduct(product: IProducts) {
      return this.http.post<IProducts>(this.url, product)

    }

      postProductToBasket(product: IProducts) {
      return this.http.post<IProducts>(this.urlBasket, product)

    }

      getProductsToBasket() {
      return this.http.get<IProducts[]>(this.urlBasket)
    }

    updateProductsToBasket(product: IProducts) {
      return this.http.put<IProducts>(`${this.urlBasket}/${product.id}`, product)

    }


}
