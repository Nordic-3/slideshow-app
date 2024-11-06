import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSendService } from '../../services/datasend/data-send.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrl: './dialogbody.component.scss'
})
export class DialogbodyComponent implements OnInit{
  time = new FormControl<number>(5000);
  constructor(private dataService : DataSendService, private dialogRef : MatDialogRef<DialogbodyComponent>){}

  ngOnInit(): void {
    this.dataService.currentVariable.subscribe(value => {
      this.time.setValue(value);
    });
  }

  modify(){
    let newTime = this.time.value || 5000;
    this.dataService.updateVariable(newTime);
    this.dialogRef.close();
  }
}
