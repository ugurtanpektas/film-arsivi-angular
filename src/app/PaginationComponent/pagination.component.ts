import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  providers:[]
})

export class PaginationComponent implements OnInit{
  @Input() activePage:any = 1;
  @Input() totalPage:any = 1;
  @Input() urlBase = '/';
  @Input() urlBrackets = '?';
  pages = [];
  constructor(){}
  ngOnInit(){
    this.activePage = parseInt(this.activePage,10);
    this.totalPage = parseInt(this.totalPage,10);
    if(this.activePage == 1){
      this.pages = [1,2,3]
    }
    else if (this.activePage === this.totalPage){
      this.pages = [this.totalPage-2, this.totalPage-1, this.totalPage];
    }
    else{
      this.pages = [this.activePage-1, this.activePage, this.activePage + 1];
    }
  }
}
