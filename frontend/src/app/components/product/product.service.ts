import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Product } from "./product.model";
import { catchError, EMPTY, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandler(e: any): Observable<any> {
    console.error(e);
    this.showMessage("Ocorreu um erro!", true);

    return EMPTY;
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),

      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),

      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + `/${id}`).pipe(
      map((obj) => obj),

      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    return this.http
      .put<Product>(this.baseUrl + `/${product.id}`, product)
      .pipe(
        map((obj) => obj),

        catchError((e) => this.errorHandler(e))
      );
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + `/${id}`).pipe(
      map((obj) => obj),

      catchError((e) => this.errorHandler(e))
    );
  }
}
