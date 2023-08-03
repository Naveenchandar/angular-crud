import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None // it applies globally
  // encapsulation: ViewEncapsulation.Emulated // it applies only to this element (not even to child). This is the default behaviour
  // encapsulation: ViewEncapsulation.ShadowDom // it applies to this element and children
})
export class AppComponent {
  inputText = 'angular-crud';
  serverData = "This data passing from app to server";
  eventFromApp() {
    this.serverData = "data changed using output event"
  }
}
