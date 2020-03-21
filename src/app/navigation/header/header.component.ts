import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataCommunicationService} from '../../data-communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataCommunicationService: DataCommunicationService) { }

  ngOnInit(): void {
  }

  toggleSideNav = () => {
    this.dataCommunicationService.notifySideNavToToggle();
  }
}
