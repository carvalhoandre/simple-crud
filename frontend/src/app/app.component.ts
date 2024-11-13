import { Component } from "@angular/core";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavigationComponent } from "./components/template/navigation/navigation.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HttpClientModule,
  ],
})
export class AppComponent {}
