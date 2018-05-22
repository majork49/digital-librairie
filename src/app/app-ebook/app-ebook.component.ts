import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook',
  templateUrl: './app-ebook.component.html',
  styleUrls: ['./app-ebook.component.scss']
})

/**
 * Classe de livres ebooks
 */
export class AppEbookComponent implements OnInit {

  @Input() nom: string;
  status: string = 'neuf';

  // Nom du livre
  name : string;

  // Descriptif du livre
  descriptif : string;

  // langue
  langue : string;

  // Liens de download
  url_pdf : string;
  url_epub : string;
  url_mobi: string;

  // Tags associés au livre (pour la recherche)
  tags: [string];

  constructor() { }

  ngOnInit() {
  }
  
  getStatus(){
  	return this.status;
  }


  getUrl_mobi(): string {
      return this.url_mobi;
  }

  setUrl_mobi(value: string) {
      this.url_mobi = value;
  }

  getUrl_epub(): string {
      return this.url_epub;
  }

  setUrl_epub(value: string) {
      this.url_epub = value;
  }
  getUrl_pdf(): string {
      return this.url_pdf;
  }

  setUrl_pdf(value: string) {
      this.url_pdf = value;
  }

  hasPdfLink(){
    // si le lien est null = alors !url = true
    if (!this.url_pdf){
      return false;
    } else {
      return true;
    }

  }
}
