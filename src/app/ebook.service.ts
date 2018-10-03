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

  searchEbooks(term : string) {
    if(!term.trim()) {
      return of(EBOOKS);
    }
    return of(EBOOKS.filter(
      ebook => ebook.tags.find(tag => tag.toLowerCase().includes(term.toLowerCase()))
    ));
  }
}
