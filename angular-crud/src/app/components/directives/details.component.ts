import { Component } from "@angular/core";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent {
    showDetails: Boolean = true;
    logList: String[] = [];
    toggleDetails(): void {
        this.logList.push(`Logged on ${new Date()}`)
        this.showDetails = !this.showDetails;
    }
}