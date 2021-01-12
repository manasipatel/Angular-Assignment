import { Component, OnInit } from '@angular/core';
import users from '../list-view/home-list.json';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  public usersList:{name:string, id:number, code:number, status:string, address:string}[] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
