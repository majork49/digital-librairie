import { Component, OnInit } from '@angular/core';
import {EbookService} from '../ebook.service';
import { Ebook } from '../ebook';
import { Observable,Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

const NB_EBOOK_PER_PAGE = 12;

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {

  ebooks : Ebook[];
  private searchTerms = new Subject<string>();
  currentPage : number = 1;
  
  constructor(private ebookService : EbookService) { }

  getEbooks() : void {
    this.ebookService.getEbooks().subscribe(ebooks => this.ebooks = ebooks);
  }
  
  search(term : string) {
    this.searchTerms.next(term);
  }

  getEbooksPage() : Ebook[] {
    return this.ebooks.slice((this.currentPage-1)*NB_EBOOK_PER_PAGE,((this.currentPage)*NB_EBOOK_PER_PAGE));
  }

  private getNbPages() : number {
   return Math.ceil(this.ebooks.length/NB_EBOOK_PER_PAGE);
  }
  getRange() : number[] {
    return Array.from({length: this.getNbPages()}, (x,i) => i+1);
  }

  selectPage(i : number ) {
    this.currentPage = i;
  }

  previousPage() : void {
    if(this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() : void {
    if(this.currentPage < this.getNbPages()) {
      this.currentPage++;
    }
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
