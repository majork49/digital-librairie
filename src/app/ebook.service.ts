import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {EBOOKS} from './ebook-mock';
@Injectable({
  providedIn: 'root'
})
export class EbookService {

  constructor() { }

  getEbooks() {
    return of(EBOOKS);
  }
}
