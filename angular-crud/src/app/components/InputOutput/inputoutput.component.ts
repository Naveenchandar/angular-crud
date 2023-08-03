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
    addServer(serverInput: HTMLInputElement) {
        this.servers.push(serverInput.value);
        this.server = "";
    }

    addServerContent(serverContent: HTMLInputElement) {
        this.serversContent.push(serverContent.value);
        this.serverContent = ""
        serverContent.value = "";
    }
    updateServerDataContent() {
        this.eventFromApp.emit();
    }
}