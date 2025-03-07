import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-ai-chat-bot',
    imports: [CommonModule],
    templateUrl: './ai-chat-bot.component.html',
    styleUrl: './ai-chat-bot.component.scss'
})
export class AiChatBotComponent {
  isFontOpened = false;

  toggleFontClass() {
    this.isFontOpened = !this.isFontOpened;
  }
  closeFont() {
    this.isFontOpened = false;
  }
  activeItem = 'chat1';
  activeChatTitle = 'Chat Bot Definition';

  toggleActive(item: string, chatTitle: string) {
    this.activeItem = item;
    this.activeChatTitle = chatTitle;
  }
}
