import {
  Component,
  ContentChildren,
  OnInit,
  AfterContentInit,
  QueryList,
  Input,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
})
export class TabContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.tabs);
  }
  ngAfterContentInit(): void {
    // this.tabs.;
    // console.log(this.tabs);
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (activeTabs) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;

    return false;
  }
}
