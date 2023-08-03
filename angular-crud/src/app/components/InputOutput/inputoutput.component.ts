import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

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
    // viewchild is used to access reference of the element anywhere in this file. without viewchild, reference will only be available in events while accepting as argument
    @ViewChild("serverInput", { static: true }) serverInputElem!: ElementRef
    @ViewChild("serverContent", { static: true }) serverContentInputElem!: ElementRef
    // server!: String;
    // serverContent!: String
    servers: String[] = [];
    serversContent: String[] = [];
    addServer(serverInput: HTMLInputElement) {
        this.servers.push(this.serverInputElem.nativeElement.value);
        // this.servers.push(serverInput.value);
        // this.server = "";
    }

    addServerContent(serverContent: HTMLInputElement) {
        this.serversContent.push(this.serverContentInputElem.nativeElement.value);
        // this.serversContent.push(serverContent.value);
        // this.serverContent = ""
    }
    updateServerDataContent() {
        this.eventFromApp.emit();
    }
}