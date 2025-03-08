import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'] // corrected styleUrl to styleUrls
})
export class NavbarComponent {

notificationOpen = false;
isfullscreen = false;
isDropdownOpened = false;
isUserDropdownOpened = false;
searchBarOpened = false;

constructor(private renderer: Renderer2, private authService: AuthService) {}

toggleSkin() {
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
      const currentSkin = htmlElement.getAttribute('data-techwave-skin');
      if (currentSkin === 'light') {
          this.renderer.setAttribute(htmlElement, 'data-techwave-skin', 'dark');
      } else {
          this.renderer.setAttribute(htmlElement, 'data-techwave-skin', 'light');
      }
  }
}

toggleNotification() {
  this.notificationOpen = !this.notificationOpen;
  this.isfullscreen = false;
  this.isDropdownOpened = false;
  this.isUserDropdownOpened = false;
}

toggleFullscreen() {
  const elem = document.documentElement;
  if (!this.isfullscreen) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).mozRequestFullScreen) { /* Firefox */
      (elem as any).mozRequestFullScreen();
    } else if ((elem as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) { /* IE/Edge */
      (elem as any).msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) { /* Firefox */
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) { /* Chrome, Safari & Opera */
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) { /* IE/Edge */
      (document as any).msExitFullscreen();
    }
  }
  // Toggle the fullscreen variable after the operation
  this.isfullscreen = !this.isfullscreen;

  // Reset other variables
  this.isDropdownOpened = false;
  this.notificationOpen = false;
  this.isUserDropdownOpened = false;
}


toggleDropdown() {
  this.isDropdownOpened = !this.isDropdownOpened;
  this.notificationOpen = false;
  this.isfullscreen = false;
  this.isUserDropdownOpened = false;
}

toggleUserDropdown() {
  this.isUserDropdownOpened = !this.isUserDropdownOpened;
  this.notificationOpen = false;
  this.isfullscreen = false;
  this.isDropdownOpened = false;
}

toggleSearchBar() {
  this.searchBarOpened = !this.searchBarOpened;
}

closeSearchBar() {
  this.searchBarOpened = false;
}

logout() {
  this.authService.logout();
}

}
