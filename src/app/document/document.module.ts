import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentRoutingModule } from './document-routing/document-routing.module';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [DocumentListComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DocumentModule { }
