import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ContentPopUpComponent } from './slider/content-pop-up/content-pop-up.component';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgDialogAnimationService } from "ng-dialog-animation";
// import { APIService } from "./services/api.service";
// import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ContentPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [NgDialogAnimationService],
  bootstrap: [AppComponent],
  entryComponents:[ContentPopUpComponent]
})
export class AppModule { }
