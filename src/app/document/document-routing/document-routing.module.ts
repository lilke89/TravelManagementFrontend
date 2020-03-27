import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DocumentListComponent} from '../document-list/document-list.component';

const routes: Routes = [
  { path: 'documents', component: DocumentListComponent },
  { path: 'tables', component: DocumentListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class DocumentRoutingModule { }
