import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[fallback-src]'
})
export class FallbackSrc {
  onErrorSrc = "assets/media/extra/no-image.png"
  loader = "assets/media/extra/loading-buffering.gif"
  constructor(
    private renderer: Renderer2,
    private el: ElementRef) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.loader);
  }

  @HostListener('load') onLoad() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.el.nativeElement.src);
  }
  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.onErrorSrc);
  }
}