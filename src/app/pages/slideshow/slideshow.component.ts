import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  imageURL: string | undefined;
  imageNumber: number =  0;
  currentDelay : number = 5000;
  time = new FormControl<number>(this.currentDelay);
  loading : boolean = true;

  constructor(private imageService: ImagesService) { }

 async ngOnInit(): Promise<void> {
    this.imageNumber = await this.imageService.imageNumber();
    this.loading = false;
    this.showImages();
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async showImages() {
    while (true) {
      for (let i = 1; i <= this.imageNumber; i++) {
        let name = 'images/' + i + '.jpg';
        this.imageService.loadImage(name).subscribe(url => {
          this.imageURL = url;
        });
        await this.delay(this.currentDelay); 
      }
    }
  }

  modify(){
    this.currentDelay = this.time.value || 5000;
  }
}
