import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";

import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent {
  constructor(private productService: ProductService, private router: Router) {}

  navigateToProductCreate(): void {
    this.productService.showMessage("Produto criado!");
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
