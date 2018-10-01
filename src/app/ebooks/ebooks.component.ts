import { Component, OnInit } from '@angular/core';
import {EbookService} from '../ebook.service';
import { Ebook } from '../ebook';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {

  ebooks : Ebook[];
  
  constructor(private ebookService : EbookService) { }

  getEbooks() : void {
    this.ebookService.getEbooks()
      .subscribe(ebooks => this.ebooks = ebooks)
  }

  ngOnInit() {
    this.getEbooks();
  }

}
