import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CD } from '../models/cd.model';
@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss',
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD: any ={};
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
      price: [null],
    });
  }
  ngOnChange() {
    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        price: formValue.price,
        onsale: false,
      };
    });}
  onSubmit() {
    this.currentCD.author = this.formulaire.value.author;
    this.currentCD.title = this.formulaire.value.title;
    this.currentCD.thumbnail = this.formulaire.value.thumbnail;
    this.currentCD.dateDeSortie = this.formulaire.value.dateDeSortie;
    this.currentCD.quantite = this.formulaire.value.quantite;
    this.currentCD.price = this.formulaire.value.price;
    console.log(this.currentCD);
  }
}
