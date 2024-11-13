import { Component } from "@angular/core";

import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

import { MatCardModule } from "@angular/material/card";
import { ProductTableComponent } from "../../components/product/product-table/product-table.component";
import { HeaderService } from "../../components/template/header/header.service";

@Component({
  selector: "app-product-crud",
  standalone: true,
  imports: [MatButtonModule, MatCardModule, ProductTableComponent],
  templateUrl: "./product-crud.component.html",
  styleUrl: "./product-crud.component.css",
})
export class ProductCrudComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      route: "/products",
    };
  }

  navigateToProductCreate(): void {
    this.router.navigate(["products/create"]);
  }
}
