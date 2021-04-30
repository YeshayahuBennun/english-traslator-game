import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  public title:string = 'English Translator Game'

  constructor() { }

  ngOnInit(): void {
  }

}
