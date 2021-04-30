import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]

  @Input() public attempts: number


  constructor() {
    console.log(this.hearts)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.attempts!==this.hearts.length){
      let index = this.hearts.length-this.attempts
      this.hearts[index-1].fullHeart=false
    }
    console.log('Attempts from painel:', this.attempts)
  }

  ngOnInit(): void {
  }

}
