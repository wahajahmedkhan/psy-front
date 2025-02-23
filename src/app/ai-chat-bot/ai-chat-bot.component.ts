import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-ai-chat-bot',
    imports: [CommonModule],
    templateUrl: './ai-chat-bot.component.html',
    styleUrl: './ai-chat-bot.component.css'
})
export class AiChatBotComponent {
  isFontOpened: boolean = false;

  toggleFontClass() {
    this.isFontOpened = !this.isFontOpened;
  }
  closeFont() {
    this.isFontOpened = false;
  }
  activeItem: string  = 'chat1';
  activeChatTitle: string = 'Chat Bot Definition';

  toggleActive(item: string, chatTitle: string) {
    this.activeItem = item;
    this.activeChatTitle = chatTitle;
  }
}
