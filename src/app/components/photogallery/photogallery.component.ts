import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-photogallery',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './photogallery.component.html',
  styleUrl: './photogallery.component.css',
})
export class PhotogalleryComponent {
  photos = [
    { title: 'Berlin', image: 'berlin.jpeg' },
    { title: 'Cologne', image: 'cologne.jpeg' },
    { title: 'The Rhine Valley', image: 'the-rhine-valley.jpeg' },
    { title: 'Munich', image: 'munich.jpeg' },
    { title: 'The Black Forest', image: 'black-forest.jpeg' },
    { title: 'Dresden', image: 'dresden.jpeg' },
    { title: 'Rothenburg ob der Tauber', image: 'rothenburg.jpeg' },
    { title: 'The Baltic Coast', image: 'rugen-island.jpeg' },
  ];
  ImageTitle: string = '';
  ImageUrl: string = '';
  currentPhoto: number = 0;
  constructor() {
    if (this.photos.length) {
      this.ImageTitle = this.photos[0].title;
      this.ImageUrl = this.photos[0].image;
    }
  }
  showImage(i: number) {
    if (this.photos[i]) {
      this.ImageTitle = this.photos[i].title;
      this.ImageUrl = this.photos[i].image;
      this.currentPhoto = i;
    }
  }

  pageIndexer(index: number): boolean {
    return Math.abs(this.currentPhoto - index) < 3;
  }
}
