import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  
  @HostListener('window:scroll', ['$event.target'])

  // public title = 'Resume';
  ngOnInit() {

  }

  onWindowScroll() {
    let element = document.querySelector('navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  /*  gotoTop() {
     window.scroll({
       top: 0,
       left: 0,
       behavior: 'smooth'
     }); */
}



