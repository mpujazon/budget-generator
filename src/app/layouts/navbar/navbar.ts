import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuVisibility = signal(true);
  showMenu(){
    this.menuVisibility.update(value => !value);
  }
}
