import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';

@Component({
    selector: 'app-index-two',
    imports: [RouterLink],
    templateUrl: './index-two.component.html',
    styleUrl: './index-two.component.scss'
})
export class IndexTwoComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['The official server of TECH-AI, a text-to-image AI where your imagination is the only limit. We’re building market-leading features that will give you greater control over your generations.'],
        typeSpeed: 40,
        backSpeed: 40,
        showCursor: true,
        cursorChar: '',
        // loop: true
      };

      const typed = new Typed('.typed-element', options);
    }
  }
}
