import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Document} from '../_interface/document.model';
import {RepositoryService} from '../../shared/repository.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { saveAs } from 'file-saver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'createdDate', 'download'];
  public dataSource = new MatTableDataSource<Document>();
  isThisTableListPage = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private repoService: RepositoryService) {
    if (this.router.url.includes('documents')) {
      this.isThisTableListPage = false;
    }
  }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllDocuments = () => {
    this.repoService.getData(this.isThisTableListPage ?  'api/TravelOrderListItem' : 'api/TravelOrderDocumentItems')
      .subscribe(res => {
        this.dataSource.data = res as Document[];
      });
  }

  public getDocument = (id: string, name: string) => {
    this.repoService.getFile(this.isThisTableListPage ? `api/TravelOrderListItem/${id}` : `api/TravelOrderDocumentItems/${id}`)
      .subscribe((blob) => {
        console.log(blob);
        this.downLoadFile(blob, blob.type, name);
      });
  }

  downLoadFile(data: any, type: string, name: string) {
    const blob = new Blob([data], {type});
    saveAs(blob, name);
  }
}
