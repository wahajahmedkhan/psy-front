import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-rightsidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent {
  isActive = 'aichatbot';
  activeMenuItem: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private router: Router) {
    this.activeMenuItem = '';
  }

  toggleClassOnHtmlTag() {
    const htmlTag = this.elementRef.nativeElement.ownerDocument.documentElement;
    
    // Use the same toggle behavior for all screen sizes
    if (htmlTag.classList.contains('right-panel-opened')) {
      this.renderer.removeClass(htmlTag, 'right-panel-opened');
    } else {
      this.renderer.addClass(htmlTag, 'right-panel-opened');
    }
  }
  
  isSubMenuOpen = true;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleActive(link: string): void {
    this.isActive = link;
  }
  
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setActiveMenuItem(event.url);
      
      // Close sidebar on navigation
      const htmlElement = document.documentElement;
      this.renderer.removeClass(htmlElement, 'right-panel-opened');
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
      case '/ai-chat-bot':
        this.activeMenuItem = 'ai-chat-bot';
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
