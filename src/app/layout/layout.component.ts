import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    NavbarComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  showRightSidebar = true;
  showLeftSidebar = true;
  excludedRoutes = ['/sign-in', '/sign-up', '/forgot-password', '/reset-password'];
  isMobile = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    // Check screen size on initialization
    this.checkScreenSize();
    
    // Check if the current route should exclude sidebars
    this.checkRoute(this.router.url);

    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkRoute(event.url);
    });

    // Initialize sidebar states
    this.initializeSidebarStates();
    
    // Add class to html element for right sidebar layout
    this.renderer.addClass(document.documentElement, 'fn-has-rightsidebar');
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 1040;
    
    // If screen size changes to mobile, automatically hide right sidebar
    if (this.isMobile) {
      this.renderer.removeClass(document.documentElement, 'right-panel-opened');
    }
  }

  private checkRoute(url: string) {
    // Check if the current route is in the excluded routes list
    const shouldExcludeSidebars = this.excludedRoutes.some(route => url.includes(route));
    
    this.showLeftSidebar = !shouldExcludeSidebars;
    this.showRightSidebar = !shouldExcludeSidebars;
    
    // Add or remove the class based on whether we should show the right sidebar
    const htmlElement = document.documentElement;
    if (this.showRightSidebar) {
      this.renderer.addClass(htmlElement, 'fn-has-rightsidebar');
    } else {
      this.renderer.removeClass(htmlElement, 'fn-has-rightsidebar');
      this.renderer.removeClass(htmlElement, 'right-panel-opened');
    }
  }
  
  private initializeSidebarStates() {
    const htmlElement = document.documentElement;
    
    // Default state depends on screen size
    if (this.isMobile) {
      // On mobile, right sidebar is hidden by default
      this.renderer.removeClass(htmlElement, 'right-panel-opened');
    } else {
      // On desktop, right sidebar is visible by default
      this.renderer.removeClass(htmlElement, 'right-panel-opened');
    }
  }
}
