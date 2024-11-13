import { OnInit, Component } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./product-delete.component.html",
  styleUrl: "./product-delete.component.css",
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  handleOnGoBack(): void {
    this.router.navigate(["/products"]);
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (!id) return this.handleOnGoBack();

    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  onDeleteProduct(): void {
    if (!this.product.id) return this.handleOnGoBack();

    this.productService.delete(this.product.id.toString()).subscribe(() => {
      this.productService.showMessage("Produto deletado com sucesso");

      this.handleOnGoBack();
    });
  }

  onCancel(): void {
    this.handleOnGoBack();
  }
}
