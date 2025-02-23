import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-personal-feed',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './personal-feed.component.html',
    styleUrl: './personal-feed.component.css'
})
export class PersonalFeedComponent {

  activeTab: string = 'your'; // Default active tab
  galleryItems: any[] = [
    { id: 345, imageUrl: 'assets/img/gallery/1.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 343, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 265, imageUrl: 'assets/img/gallery/2.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 65, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 456, imageUrl: 'assets/img/gallery/3.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 95, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 4311, imageUrl: 'assets/img/gallery/4.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 120, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 33, imageUrl: 'assets/img/gallery/5.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 322, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 709, imageUrl: 'assets/img/gallery/6.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 234, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 20, imageUrl: 'assets/img/gallery/7.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 700, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' },
    { id: 45, imageUrl: 'assets/img/gallery/8.jpg', authorImageUrl: 'assets/img/user/user.jpg', authorName: 'LuckyLee', likeCount: 90, description: 'Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and' }

  ];
  checkBoxChecked: boolean = false;

  changeTab(tab: string) {
    // Add loading class to the feed__results element
    const feedResults = document.querySelector('.feed__results');
    if (feedResults) {
      feedResults.classList.add('loading');
    }

    // Simulate loading for 2 seconds (adjust this as needed)
    setTimeout(() => {
      // Set active tab after loading
      this.activeTab = tab;

      // Remove loading class from the feed__results element after loading
      if (feedResults) {
        feedResults.classList.remove('loading');
      }
    }, 1000); // 2 seconds delay
  }
  // Method to handle tab change

  isLightboxOpened: boolean = false;

  toggleLightbox() {
    this.isLightboxOpened = !this.isLightboxOpened;
  }
  closeLightbox() {
    this.isLightboxOpened = false;
  }
  isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}
