import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';
@Component({
    selector: 'app-pricing',
    imports: [],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss'
})
export class PricingComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (this.isPlatformBrowser()) {
      const options = {
        strings: ['Start small and free, upgrade as you go. Take control of everything.'],
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        // loop: true
      };

      const typed = new Typed('.typed-element', options);
    }
    if (this.isPlatformBrowser()) {
      const options = {
        strings: ['Many support queries and technical questions will already be answered'],
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        // loop: true
      };

      const typed = new Typed('.typed-element-two', options);
    }
  }

  private isPlatformBrowser() {
    return typeof window !== 'undefined';
  }
  isAccordionOpened = 0;

  toggleAccordion(accordionNumber: number) {
    if (this.isAccordionOpened === accordionNumber) {
      this.isAccordionOpened = 0; // Close the currently open accordion
    } else {
      this.isAccordionOpened = accordionNumber; // Open the clicked accordion
    }
  }

  activeTab: string = 'tab1';
  leftPosition: string = '10px';
  width: string = '118.547px';

  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'tab1') {
      this.leftPosition = '10px';
      this.width = '118.547px';
    } else {
      this.leftPosition = '128.547px';
      this.width = '134.438px';
    }
  }

}
