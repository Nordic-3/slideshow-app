import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';
import { DataSendService } from '../../services/datasend/data-send.service';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  imageURL: string | undefined;
  imageNumber: number =  0;
  currentDelay : number = 5000;
  loading : boolean = true;
  private isSlideshowRunning = true;
  private currentlyDisplayedImageName = 1;

  constructor(private imageService: ImagesService, private dialog : MatDialog, private dataService : DataSendService) { }

 async ngOnInit(): Promise<void> {
  this.imageService.imageNumber().subscribe(imageNumbers => {
    this.imageNumber = imageNumbers[0];
    this.loading = false;
    this.showImages();
  });
  this.dataService.currentVariable.subscribe(value => {
    this.currentDelay = value;
  });
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

private async showImages() {
  if (this.imageNumber === 0) return;
  if (!this.isSlideshowRunning) return;
  this.isSlideshowRunning = true;

  while (this.isSlideshowRunning) {
    this.imageURL = `assets/images/${this.currentlyDisplayedImageName}.jpg`;
    await this.delay(this.currentDelay);

    if (this.currentlyDisplayedImageName < this.imageNumber) {
      this.currentlyDisplayedImageName++;
    } else {
      this.currentlyDisplayedImageName = 1;
    }
  }
}

  openDialog(){
    this.dataService.updateVariable(this.currentDelay);
    this.dialog.open(DialogbodyComponent, {
      width: '550px'
    });
  }

  stopSlideshow() {
    this.isSlideshowRunning = false;
  }

  startSlideshow() {
    this.isSlideshowRunning = true;
    this.showImages();
  }
}
