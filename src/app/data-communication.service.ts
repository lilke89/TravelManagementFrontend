import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  private toggleSideNav = new Subject<any>();

  public toggleSideNavObservable = this.toggleSideNav.asObservable();

  constructor() { }

  public notifySideNavToToggle() {
    this.toggleSideNav.next();
  }
}
