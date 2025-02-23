import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-faq',
    imports: [CommonModule],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {
  isAccordionOpened = 0;
  faqHeight = '76vh'; // Initial height

  toggleAccordion(accordionNumber: number) {
    if (this.isAccordionOpened === accordionNumber) {
      this.isAccordionOpened = 0; // Close the currently open accordion
      this.faqHeight = '76vh'; // Change faq height back to initial value
    } else {
      this.isAccordionOpened = accordionNumber; // Open the clicked accordion
      this.faqHeight = 'auto'; // Change faq height to 'auto'
    }
  }
}
