import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatPaginatorModule, MatPaginator } from "@angular/material/paginator";
import { MatSortModule, MatSort } from "@angular/material/sort";

import { ProductService } from "../product.service";
import { CommonModule } from "@angular/common";
import { Product } from "../product.model";

@Component({
  selector: "app-product-table",
  templateUrl: "./product-table.component.html",
  styleUrl: "./product-table.component.css",
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class ProductTableComponent implements AfterViewInit {
  displayedColumns: string[] = ["id", "name", "price", "action"];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService) {}

  ngAfterViewInit(): void {
    this.productService.read().subscribe((products) => {
      this.dataSource.data = products;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
