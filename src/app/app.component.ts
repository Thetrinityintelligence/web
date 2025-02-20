import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the_shree_ram_group';
  
  scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
