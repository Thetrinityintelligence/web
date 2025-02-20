import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menus } from 'src/app/utill/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menus: any = Menus;
  email: string = 'info@theshreeramgroup.com';
  constructor(private router: Router) {}
  onMenu(menu: any) {
    this.router.navigate([menu.menu]);
  }
}
