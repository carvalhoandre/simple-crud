import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {}

  get title(): string {
    return this.headerService.headerData.title;
  }
  get icon(): string {
    return this.headerService.headerData.icon;
  }
  get route(): string {
    return this.headerService.headerData.route;
  }
}
