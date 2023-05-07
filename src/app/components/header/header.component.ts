import { Component, OnInit } from '@angular/core';

export type HeaderState = 'collapse' | 'collapsing' | 'collapse show';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public state: HeaderState = 'collapse';

  constructor() { }

  ngOnInit() {
  }

  // There are libraries that handle bootstrap navbars better than this, but this is a simple example
  toggle() {
    if (this.state === 'collapse') {
      this.state = 'collapsing';
      // bootstrap menu animation is weird, need to wait a little before switchign to show
      setTimeout(() => {
        this.state = 'collapse show';
      }, 1);
    } else if (this.state === 'collapse show') {
      this.state = 'collapsing';
      setTimeout(() => {
        this.state = 'collapse';
      }, 500);
    }
  }
}
