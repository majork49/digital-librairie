import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook',
  templateUrl: './app-ebook.component.html',
  styleUrls: ['./app-ebook.component.scss']
})
export class AppEbookComponent implements OnInit {
	
  @Input() nom: string;
  status: string = 'neuf';

  constructor() { }

  ngOnInit() {
  }
  
  getStatus(){
  	return this.status;
  }

}
