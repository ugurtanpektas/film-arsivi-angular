import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  providers:[]
})
export class PaginationComponent implements OnInit{
  constructor(){}
  ngOnInit(){
    console.log('pagination yüklendi');
  }
}
