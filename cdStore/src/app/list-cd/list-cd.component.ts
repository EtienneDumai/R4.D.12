import { Component, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss',
})
export class ListcdComponent implements OnInit {
  listcd!: CD[];
  ngOnInit(): void {
    this.listcd = [
      {
        id: 1,
        title: 'The Dark Side of the Moon',
        author: 'Pink Floyd',
        price: 10,
        thumbnail:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/220px-The_Dark_Side_of_the_Moon_Cover.svg.png',
        dateDeSortie: new Date(1973, 3, 1),
        quantite: 1,
      },
      {
        id: 2,
        title: 'Pulse',
        author: 'Pink Floyd',
        price: 10,
        thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateDeSortie: new Date(1974, 4, 11),
        quantite: 2,
        onsale: true,
      },
      {
        id: 3,
        title: 'Pulse1',
        author: 'Pink Floyd',
        price: 100,
        thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateDeSortie: new Date(1984, 6, 20),
        quantite: 0,
      },
    ];
  }
  
}
