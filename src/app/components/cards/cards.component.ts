import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, NgForOf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})

export class CardsComponent {
  Posts = [
    {
      title: 'Neat Tree',
      author: '@nature',
      image: 'assets/img1.png',
      description:
        'A perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species.',
    },
    {
      title: 'Snowy Mountain',
      author: '@hikingperson',
      image: 'assets/img2.png',
      description:
        'From challenging adventure to tranquil solitude, the contrasts of the Snowy Mountains will surprise and inspire. ',
    },
    {
      title: 'Mountain Biking',
      author: '@biking1998',
      image: 'assets/img3.png',
      description:
        'Mountain biking is a sport of riding bicycles off-road, often over rough terrain, usually using specially designed mountain bikes.',
    },
  ];
}
