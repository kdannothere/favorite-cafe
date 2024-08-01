import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private slideIndex = 0;
  private pictures = ['/img/bg1.png', '/img/bg2.png', '/img/bg3.png'];
  picture = this.pictures[0];
  prevPicture = this.pictures[0];

  private _pictureClass: Set<string> = new Set();
  get pictureClass(): string {
    return Array.from(this._pictureClass).join(' ');
  }

  private runSlideShow() {
    setTimeout(() => {
      // change classes
      if (!this._pictureClass.has('animate-show')) {
        this._pictureClass.add('animate-show');
      } else {
        this._pictureClass.delete('animate-show');
        this.runSlideShow();
        return;
      }
      // change pictures
      if (this.slideIndex < this.pictures.length - 1) ++this.slideIndex;
      else this.slideIndex = 0;
      this.prevPicture = this.picture;
      this.picture = this.pictures[this.slideIndex];
      this.runSlideShow();
    }, 2800);
  }

  ngOnInit() {
    this.runSlideShow();
  }
}
