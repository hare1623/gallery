import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SliderComponent } from '../slider.component';

@Component({
  selector: 'app-content-pop-up',
  templateUrl: './content-pop-up.component.html',
  styleUrls: ['./content-pop-up.component.css']
})
export class ContentPopUpComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<ContentPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data?:any) { }

  public currentItem = this.data;
  public pdfLoad = true;


  ngOnInit(): void {
    console.log(this.currentItem.imgUrl);
    
  }

}
