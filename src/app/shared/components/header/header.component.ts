import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menus } from '../../../utill/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menus: any = Menus;
  constructor(private router: Router) {
    console.log('this.router.url::', this.router.url);
    window.location.pathname;
    let activeMenu = this.menus.find(
      (x: any) => x.menu === window.location.pathname
    );
    if (activeMenu) {
      activeMenu.active = true;
    } else {
      this.menus[0].active = true;
    }
  }
  onMenu(menu: any) {
    let activeMenu = this.menus.find((x: any) => x.active);
    if (activeMenu) {
      activeMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.menu]);
  }
}
