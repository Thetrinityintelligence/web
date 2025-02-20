import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  // @ViewChild() exampleModal
  @ViewChild('exampleModal') exampleModal!: ElementRef;

constructor(){

}
ngOnInit(): void {
  // debugger
  // this.exampleModal?.nativeElement.click();
  // document.getElementById('exampleModal')?.click();
}
}
