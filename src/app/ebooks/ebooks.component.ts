import { Component, OnInit } from '@angular/core';
import {EbookService} from '../ebook.service';
import { Ebook } from '../ebook';
import { Observable,Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {

  ebooks : Ebook[];
  private searchTerms = new Subject<string>();
  
  constructor(private ebookService : EbookService) { }

  getEbooks() : void {
    this.ebookService.getEbooks().subscribe(ebooks => this.ebooks = ebooks);
  }

  search(term : string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.getEbooks();
    this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),
 
            // ignore new term if same as previous term
            distinctUntilChanged(),
       
            // switch to new search observable each time the term changes
            switchMap((term: string) => this.ebookService.searchEbooks(term)),
    ).subscribe(ebooks => this.ebooks = ebooks);
  }

}
