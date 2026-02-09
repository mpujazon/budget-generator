import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuVisibility = signal(true);
  showMenu(){
    this.menuVisibility.update(value => !value);
  }
}
