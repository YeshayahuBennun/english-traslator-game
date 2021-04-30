import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameInProgress: boolean = true
  public typeEndGame: string

  public endGame(type: string) {
    console.log(type)
    this.gameInProgress = false
    this.typeEndGame = type
  }

  public restartGame() {
    this.gameInProgress = true
    this.typeEndGame = undefined
  }
}
