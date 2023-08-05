import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, AfterContentInit {
  @ContentChild("labelContent") labelConent!: ElementRef;
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit labelConent",this.labelConent)
  }
  ngOnInit(): void {
    console.log("ngOnInit labelConent",this.labelConent)
  }
}
