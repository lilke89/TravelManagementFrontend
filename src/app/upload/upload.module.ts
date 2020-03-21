import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {MaterialModule} from '../material/material.module';
import {UploadComponent} from './upload.component';
import {UploadService} from './upload.service';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [UploadComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [UploadComponent],
  entryComponents: [DialogComponent], // Add the DialogComponent as entry component
  providers: [UploadService],
})
export class UploadModule { }
