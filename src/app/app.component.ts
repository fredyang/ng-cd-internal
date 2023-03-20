import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ApplicationRef, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges , DoCheck {

  constructor() {}

  log(msg: string, prefix = '') {
    console.log(`${prefix} [${this.constructor.name}] ${msg}`);
  }

  logDirtyChecking() {
    this.log(`dirty checking state and updating DOM if necessary`, '->');
  }

  cycle() { }


  ngAfterViewChecked(): void {
    this.log(`ngAfterViewChecked`);
  }

  ngAfterViewInit(): void {
    this.log(`ngAfterViewInit`);
  }

  ngAfterContentChecked(): void {
    this.log(`ngAfterContentChecked`);
  }

  ngAfterContentInit(): void {
    this.log(`ngAfterContentInit`);
  }

  ngOnInit(): void {
    this.log(`ngOnInit`);
  }
  ngDoCheck() {
    this.log(`ngDoCheck`);
  }

  ngOnChanges() {
    this.log(`ngOnChanges`);
  }

}