import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private slideIndex = 0;
  private pictures = ['/bg1.png', '/bg2.png', '/bg3.png'];
  picture = this.pictures[0];
  prevPicture = this.pictures[0];

  private _pictureClass: Set<string> = new Set();
  get pictureClass(): string {
    return Array.from(this._pictureClass).join(' ');
  }

  private _prevPictureClass: Set<string> = new Set();
  get prevPictureClass(): string {
    return Array.from(this._prevPictureClass).join(' ');
  }

  private runSlideShow() {
    setTimeout(() => {
      // change classes 
      if (!this._pictureClass.has('animate-show')) {
        this._pictureClass.add('animate-show');
        this._prevPictureClass.add('animate-hide');
      } else {
        this._pictureClass.delete('animate-show');
        this._prevPictureClass.delete('animate-hide');
        this.runSlideShow();
        return;
      }
      // change pictures
      if (this.slideIndex < this.pictures.length - 1) ++this.slideIndex;
      else this.slideIndex = 0;
      this.prevPicture = this.picture;
      this.picture = this.pictures[this.slideIndex];
      this.runSlideShow();
    }, 4000);
  }

  ngOnInit() {
    this.runSlideShow();
  }
}
