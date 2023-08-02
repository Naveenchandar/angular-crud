import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = 'angular-crud';
  serverData = "This data passing from app to server";
  eventFromApp() {
    this.serverData = "data changed using output event"
  }
}
