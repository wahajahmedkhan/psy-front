import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-community-feed',
    imports: [CommonModule],
    templateUrl: './community-feed.component.html',
    styleUrl: './community-feed.component.scss'
})
export class CommunityFeedComponent {
  trendingEnabled: boolean = true; // Initially set to true for the "Trending" link
  newEnabled: boolean = false; // Initially set to false for the "New" link

  toggleTrending() {
    this.trendingEnabled = true;
    this.newEnabled = false;
  }

  toggleNew() {
    this.newEnabled = true;
    this.trendingEnabled = false;
  }
  isLightboxOpened: boolean = false;

  toggleLightbox() {
    this.isLightboxOpened = !this.isLightboxOpened;
  }
  closeLightbox() {
    this.isLightboxOpened = false;
  }


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
  item = {
    id: 1,
    likeCount: 0
  };

  isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
