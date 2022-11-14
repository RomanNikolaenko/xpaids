import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width = 0;
  height = 0;

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.property(this.width, this.height);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;

    this.property(this.width, this.height);
  }

  property(w: Number, h: Number) {
    document.documentElement.style.setProperty('--vw', `${w}px`);
    document.documentElement.style.setProperty('--vh', `${h}px`);
  }
}
