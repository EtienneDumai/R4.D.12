import { Component, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../cds.service';

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss',
})
export class ListcdComponent implements OnInit {
  listcd!: CD[];
  constructor(private myCdsService: CdsService) {}
  ngOnInit(): void {
    this.myCdsService.getCds().subscribe(cd => {this.listcd=cd});
  }
  
}
