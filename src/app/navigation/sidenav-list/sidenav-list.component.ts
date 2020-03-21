import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DataCommunicationService} from '../../data-communication.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  constructor(private dataCommunicationService: DataCommunicationService) {

  }

  toggleSideNav() {
    this.dataCommunicationService.notifySideNavToToggle();
  }

}
