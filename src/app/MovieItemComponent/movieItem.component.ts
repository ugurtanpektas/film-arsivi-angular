import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movieItem.component.html',
  providers:[],
  styleUrls:['./movieItem.component.scss']
})

export class MovieItemComponent implements OnInit{
  @Input() movie:any = {};
  constructor(){}
  ngOnInit(){
  }
}
