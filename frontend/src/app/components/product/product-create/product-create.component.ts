import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";

import { ProductService } from "../product.service";

import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent {
  product: Product = {
    name: "",
    price: null,
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
