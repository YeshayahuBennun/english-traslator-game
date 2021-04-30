import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public phrases: Phrase[] = PHRASES
  public insturction: string = "Translate the phrase"
  public answer: string = ''

  public round = 0
  public roundPhrase: Phrase

  public progress: number = 0

  public attempts: number = 3

  @Output() public endGame:EventEmitter<String> = new EventEmitter()

  constructor() {
    this.updateRound()
  }

  ngOnInit(): void {
  }

  public updateAnswer(answer: Event) {
    this.answer = (<HTMLInputElement>answer.target).value
  }

  public checkAnswer() {

    if (this.roundPhrase.ptBrPhrase === this.answer) {
      //change the answer round
      this.round++
      //progress
      this.progress += (100 / this.phrases.length)
      //
      if (this.round === 4) {
        this.endGame.emit('victory')
      }
      //update round phrase
      this.updateRound()
    } else {
      this.attempts--
      if (this.attempts === -1) {
        this.endGame.emit('game-over')
      }
    }
  }
  public updateRound() {
    this.roundPhrase = this.phrases[this.round]
    //clear answer
    this.answer = ''
  }
}

