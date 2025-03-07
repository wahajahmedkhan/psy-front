import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-leftsidebar',
    imports: [CommonModule, RouterLink],
    templateUrl: './leftsidebar.component.html',
    styleUrl: './leftsidebar.component.scss'
})
export class LeftsidebarComponent {
  isActive = 'aichatbot';
  activeMenuItem: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef , private router: Router) {
    this.activeMenuItem = '';
   }

  toggleClassOnHtmlTag() {
    const htmlTag = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (htmlTag.classList.contains('panel-opened')) {
      this.renderer.removeClass(htmlTag, 'panel-opened');
    } else {
      this.renderer.addClass(htmlTag, 'panel-opened');
    }
  }
  isSubMenuOpen = true;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleActive(link: string): void {
    this.isActive = link;
  }
  toggleMobilePanel() {
    // Check if the class is already present
    const isPanelOpened = document.documentElement.classList.contains('mobile-panel-opened');

    // Toggle the class
    if (isPanelOpened) {
      this.renderer.removeClass(document.documentElement, 'mobile-panel-opened');
    } else {
      this.renderer.addClass(document.documentElement, 'mobile-panel-opened');
    }
  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setActiveMenuItem(event.url);
    });
  }

  setActiveMenuItem(url: string) {
    switch (url) {
      case '/':
        this.activeMenuItem = '';
        break;
      case '/community_feed':
        this.activeMenuItem = 'community_feed';
        break;
      case '/personal_feed':
        this.activeMenuItem = 'personal_feed';
        break;
      case '/models':
        this.activeMenuItem = 'models';
        break;
      case '/image_generation':
        this.activeMenuItem = 'image_generation';
        break;
      case '/aichatbot':
        this.activeMenuItem = 'aichatbot';
        break;
      case '/pricing':
        this.activeMenuItem = 'pricing';
        break;
      case '/documentation':
        this.activeMenuItem = 'documentation';
        break;
      case '/faq':
        this.activeMenuItem = 'faq';
        break;
      case '/changelog':
        this.activeMenuItem = 'changelog';
        break;
      case '/contact':
        this.activeMenuItem = 'contact';
        break;
      case '/index-two':
        this.activeMenuItem = 'index-two';
        break;
      case '/sign-in':
        this.activeMenuItem = 'sign-in';
        break;
      default:
        this.activeMenuItem = '';
        break;
    }
  }
}
