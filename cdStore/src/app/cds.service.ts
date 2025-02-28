import { Injectable } from '@angular/core';
import { CD } from './models/cd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CdsService {
  constructor(private http:HttpClient) {}
  getCds(): Observable<CD[]> {
    return this.http.get<CD[]>('http://localhost:3000/CD');
  }
  getCdById(id: number): Observable<CD> {
    return this.http.get<CD>(`http://localhost:3000/CD/${id}`);
  }
  ajouterCd(cd: CD): Observable<CD> {
    this.cdService.addCD(cd).subscribe({
      next : cd => {
        this.router.navigateByUrl('/catalog');
    },
    error : err =>
    {
      console.log('Observable ajout du CD a émis une erreur : ' +err);
      alert('Une erreur est survenue lors de l\'ajout du CD');
    }
  });
}
