import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterOutlet],
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {}
