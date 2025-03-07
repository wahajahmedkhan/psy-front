import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-layout',
    imports: [
        NavbarComponent,
        LeftsidebarComponent,
        RouterOutlet,
       
        CommonModule
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  hasSidebar = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Subscribe to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSidebarVisibility();
      }
    });
  }

  private updateSidebarVisibility(): void {
    const currentUrl = this.router.url;
    this.hasSidebar = this.shouldShowSidebar(currentUrl);
  }

  private shouldShowSidebar(url: string): boolean {
    return url.includes('image_generation') ||
           url.includes('aichatbot') ||
           url.includes('documentation');
  }
}
