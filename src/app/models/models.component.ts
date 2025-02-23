import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-models',
    imports: [CommonModule],
    templateUrl: './models.component.html',
    styleUrl: './models.component.scss'
})
export class ModelsComponent {
  activeTab: string = 'tab1';
  modelItems: any[] = [
    { id: 1, title: 'GameVisuals', imageUrl: 'assets/img/models/1.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: true },
    { id: 2, title: 'GameVisuals', imageUrl: 'assets/img/models/2.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 3, title: 'GameVisuals', imageUrl: 'assets/img/models/3.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 4, title: 'GameVisuals', imageUrl: 'assets/img/models/4.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 5, title: 'GameVisuals', imageUrl: 'assets/img/models/5.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 6, title: 'GameVisuals', imageUrl: 'assets/img/models/6.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 7, title: 'GameVisuals', imageUrl: 'assets/img/models/7.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 8, title: 'GameVisuals', imageUrl: 'assets/img/models/8.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 9, title: 'GameVisuals', imageUrl: 'assets/img/models/9.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false },
    { id: 10, title: 'GameVisuals', imageUrl: 'assets/img/models/10.jpg', description: 'A versatile model great at both photorealism and anime, includes noise offset training... by Lykon.', author: 'Caden', bookmarked: false }

  ];
  loading: boolean = false;

  changeTab(tab: string) {
    this.activeTab = tab;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  selectItem(item: any) {
    console.log('Selected item:', item);
  }
}
