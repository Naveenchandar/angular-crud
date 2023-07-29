import { Component } from "@angular/core";

@Component({
    selector: "app-data-binding",
    templateUrl: "./data-binding.component.html"
})
export class DataBindingComponent {
    username = "";

    resetUsername(): void {
        this.username = "";
    }
}