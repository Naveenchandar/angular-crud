import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-game",
    templateUrl: "./gamecontrol.component.html",
    styleUrls: ["./gamecontrol.component.css"]
})
export class GameControlComponent {
    @Input() counter!: number;
    @Output() startGame = new EventEmitter();
    @Output() stopGame = new EventEmitter();

    gameStart() {
        this.startGame.emit();
    }

    gameStop() {
        this.stopGame.emit(this.counter);
    }
}