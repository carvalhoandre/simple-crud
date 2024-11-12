import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [MatSidenavModule, MatListModule],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.css",
})
export class NavigationComponent {}
