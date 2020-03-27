import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DocumentModule} from './document/document.module';



const routes: Routes = [
  { path: 'upload', component: HomeComponent},
  { path: 'table', loadChildren: () => DocumentModule },
  { path: 'document', loadChildren: () => DocumentModule },
  { path: '', redirectTo: '/upload', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
