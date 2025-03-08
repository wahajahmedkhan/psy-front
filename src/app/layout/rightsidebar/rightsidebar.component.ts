import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface ChatItem {
  id: number;
  title: string;
  isActive: boolean;
  isEditing: boolean;
}

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
export class RightsidebarComponent implements OnInit {
  isActive = 'aichatbot';
  activeMenuItem = '';
  chatItems: ChatItem[] = [
    { id: 1, title: 'Chat Bot Definition', isActive: true, isEditing: false },
    { id: 2, title: 'Essay: Marketing', isActive: false, isEditing: false },
    { id: 3, title: 'Future of Social Media', isActive: false, isEditing: false },
    { id: 4, title: 'Business Ideas', isActive: false, isEditing: false }
  ];
  currentChatTitle = '';
  lastChatId = 4;
  isSubMenuOpen = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to update active menu item
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        if (url.includes('ai-chat-bot')) {
          this.activeMenuItem = 'ai-chat-bot';
        } else {
          this.activeMenuItem = '';
        }
      });
  }

  toggleClassOnHtmlTag() {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      const isRightPanelOpen = htmlElement.classList.contains('right-panel-opened');
      this.renderer.removeClass(htmlElement, 'right-panel-opened');
      if (!isRightPanelOpen) {
        this.renderer.addClass(htmlElement, 'right-panel-opened');
      }
    }
  }
  
  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleActive(link: string): void {
    this.isActive = link;
  }

  // Chat functionality methods
  createNewChat(): void {
    this.lastChatId++;
    const newChat: ChatItem = {
      id: this.lastChatId,
      title: 'New Chat',
      isActive: false,
      isEditing: false
    };
    
    // Set all chats to inactive
    this.chatItems.forEach(chat => chat.isActive = false);
    
    // Set new chat to active
    newChat.isActive = true;
    
    // Add new chat to the beginning of the array
    this.chatItems.unshift(newChat);
    
    // Navigate to chat bot with the new chat
    this.router.navigate(['/ai-chat-bot']);
  }

  selectChat(chat: ChatItem): void {
    // Set all chats to inactive
    this.chatItems.forEach(item => item.isActive = false);
    
    // Set selected chat to active
    chat.isActive = true;
    
    // Navigate to chat bot with the selected chat
    this.router.navigate(['/ai-chat-bot']);
  }

  // Handle keyboard events for accessibility
  handleKeyDown(event: KeyboardEvent, chat: ChatItem): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectChat(chat);
    }
  }

  editChat(chat: ChatItem, event: Event): void {
    event.stopPropagation();
    chat.isEditing = true;
    this.currentChatTitle = chat.title;
  }

  saveChat(chat: ChatItem, event: Event): void {
    event.stopPropagation();
    const inputElement = event.target as HTMLElement;
    const chatElement = inputElement.closest('.fn-chat-link') as HTMLElement;
    const inputField = chatElement.querySelector('input') as HTMLInputElement;
    
    if (inputField && inputField.value.trim() !== '') {
      chat.title = inputField.value;
    }
    
    chat.isEditing = false;
  }

  cancelEdit(chat: ChatItem, event: Event): void {
    event.stopPropagation();
    chat.isEditing = false;
  }

  deleteChat(chat: ChatItem, event: Event): void {
    event.stopPropagation();
    const index = this.chatItems.findIndex(item => item.id === chat.id);
    
    if (index !== -1) {
      this.chatItems.splice(index, 1);
      
      // If we deleted the active chat, activate the first chat in the list
      if (chat.isActive && this.chatItems.length > 0) {
        this.chatItems[0].isActive = true;
      }
    }
  }

  toggleOptions(event: Event): void {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const optionsPopup = target.closest('.options')?.querySelector('.options-popup') as HTMLElement;
    
    if (optionsPopup) {
      // Close all other option popups first
      document.querySelectorAll('.options-popup').forEach(popup => {
        if (popup !== optionsPopup) {
          (popup as HTMLElement).style.display = 'none';
        }
      });
      
      // Toggle current popup
      optionsPopup.style.display = optionsPopup.style.display === 'block' ? 'none' : 'block';
    }
  }
}
