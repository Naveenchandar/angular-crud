import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-inputoutput",
    templateUrl: "./inputoutput.component.html",
    // styles: [
    //     'p {color: blueviolet;}'
    // ]
})
export class InputOutComponent {
    @Input() serverData!: String
    @Input('staticData') dataStatic!: String
    @Output() eventFromApp = new EventEmitter()
    server!: String;
    serverContent!: String
    servers: String[] = [];
    serversContent: String[] = [];
    addServer() {
        this.servers.push(this.server);
        this.server = "";
    }

    addServerContent() {
        this.serversContent.push(this.serverContent);
        this.serverContent = ""
    }
    updateServerDataContent() {
        this.eventFromApp.emit();
    }
}