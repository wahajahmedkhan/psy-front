import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  showEmptyNotice: boolean = false;

  sendMessage() {
    // Check if any required field is empty
    // For demonstration purposes, let's assume a simple check
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showEmptyNotice = true;
    } else {
      // Your logic to send the message
      // For demonstration, assume it's successful
      this.showEmptyNotice = false;
    }
  }
}
