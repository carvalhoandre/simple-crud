import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";

import { ProductService } from "../product.service";
import { HttpClientModule } from "@angular/common/http";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  standalone: true,
  imports: [MatButtonModule, HttpClientModule],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent {
  product: Product = {
    name: "",
    price: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  navigateToProducts(): void {
    this.router.navigate(["/products"]);
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso!");
      this.navigateToProducts();
    });
  }

  cancel(): void {
    this.navigateToProducts();
  }
}
