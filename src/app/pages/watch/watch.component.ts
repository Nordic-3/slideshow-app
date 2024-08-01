import { Component } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss'
})
export class WatchComponent {

  watchThis = this.whatToWhach();

  reGenerate() {
    this.watchThis = this.whatToWhach();
  }
  
  private whatToWhach(): string {
    let season = this.randomIntFromInterval(1, 10);
    let watch = season + ". season ";
    switch (season) {
      case 3:
      case 6:
        watch += this.randomIntFromInterval(1, 25) + ". episode";
        break;
      case 10:
        watch += this.randomIntFromInterval(1, 18) + ". episode";
        break;
      default:
        watch += this.randomIntFromInterval(1, 24) + ". episode";
        break;
    }
    return watch;
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
