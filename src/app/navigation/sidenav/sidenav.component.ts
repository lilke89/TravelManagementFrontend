import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {DataCommunicationService} from '../../data-communication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  public isSideNavHidden = false;
  private toggleSideNavSubscriber;


  private mobileQueryListener: () => void;

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.isSideNavHidden = true;
    }
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    dataCommunicationService: DataCommunicationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 960px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', (e) => {
      this.isSideNavHidden = e.matches;
    });

    this.toggleSideNavSubscriber = dataCommunicationService.toggleSideNavObservable.subscribe(() => {
      if (this.mobileQuery.matches) {
        this.isSideNavHidden = !this.isSideNavHidden;
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.toggleSideNavSubscriber.unsubscribe();
  }
}
