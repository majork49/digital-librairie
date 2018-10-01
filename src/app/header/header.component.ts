import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : string = "Alltech Library";
  imgLink : string = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/17498435_1326294287450352_3305205774618029791_n.jpg?_nc_cat=111&oh=772f303112060231a18172738369e88f&oe=5C1E412A";
  constructor() { }

  ngOnInit() {
  }

}
