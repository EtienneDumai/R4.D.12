import { Component, Input, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../cds.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss',
})
export class CDComponent implements OnInit {
  @Input() Cd!: CD;
  theCd!: CD;
  idcd!: string;
  constructor(private cdService : CdsService, private route : ActivatedRoute) {}
    ngOnInit(): void {
      this.idcd = this.route.snapshot.params['id'];
      if(this.idcd!==undefined){
        this.cdService.getCdById(+this.idcd).subscribe(cd => {this.theCd=cd});
      }
      else{
        this.theCd = this.Cd;
      }
    }
  
  public  onAddCD(): void {
    this.Cd.quantite++;
  }
}