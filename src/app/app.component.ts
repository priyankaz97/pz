import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-website';
  panelOpenState = false;

  toggleMenuIcon() {
      $('#toggle').toggleClass("on");
      $('.toggle-menu-button').toggleClass("menu-open");
      $('.menu-backdrop').fadeToggle();

  }
}