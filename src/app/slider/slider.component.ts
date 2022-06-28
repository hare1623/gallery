import { Component, OnInit } from '@angular/core';
// import { APIService } from "../services/api.service";
import { Assets } from "./sliderData";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { ContentPopUpComponent } from './content-pop-up/content-pop-up.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public slideIndex = 0;
  itemList = Assets;
  public currentPhoto : any;
  public pdfIcon = faFilePdf;
  
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.api.getMyCustomJson().subscribe(
    //   (data:any)=>{
    //     this.itemList = data;
    //     console.log(this.itemList);
        
    //   }
      
    // )
    // console.log(Assets);
    
    console.log(this.itemList);
    // this.currentPhoto= this.itemList[0].imgUrl;
    
  
  }

  openPdf(item?: any){
    if(item.assetType == "External"){
      window.open(item.imgUrl);
    }else{
      const dialogRef = this.dialog.open(ContentPopUpComponent,{
        data:item,
        width:'55%'
      });
    }
  }

  openLink(itemUrl?:string){
    window.open(itemUrl);
  }

  
   plusSlides(n?:any) {
    this.slideIndex += n;
  }
  
  // Thumbnail image controls
  currentSlide(n?:any) {
    this.slideIndex = n;
  }

   

}
