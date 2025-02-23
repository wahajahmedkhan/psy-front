import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-image-generation',
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
    ],
    templateUrl: './image-generation.component.html',
    styleUrl: './image-generation.component.scss'
})
export class ImageGenerationComponent {
  numberOfImages: number = 4;
  isModelOpen: boolean = false;
  imageDimensions: number = 7;
  valueS: number = 7;

  constructor(private renderer: Renderer2, private router: Router) {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.removeClassFromWrapper();
    // });
  }

  increaseImages() {
    if (this.numberOfImages < 20) {
      this.numberOfImages++;
    }
  }

  decreaseImages() {
    if (this.numberOfImages > 1) {
      this.numberOfImages--;
    }
  }

  toggleModel() {
    this.isModelOpen = !this.isModelOpen;
  }

  toggleSidebar() {
    const wrapper = document.querySelector('.techwave-fn-wrapper');
    if (wrapper) {
      if (wrapper.classList.contains('fn-has-sidebar')) {
        this.renderer.removeClass(wrapper, 'fn-has-sidebar');
      } else {
        this.renderer.addClass(wrapper, 'fn-has-sidebar');
      }
    }
  }

  // removeClassFromWrapper() {
  //   const wrapper = document.querySelector('.techwave-fn-wrapper');
  //   if (wrapper && wrapper.classList.contains('fn-has-sidebar')) {
  //     this.renderer.removeClass(wrapper, 'fn-has-sidebar');
  //   }
  // }
}
