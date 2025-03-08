import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './services/auth.guard';
import { nonAuthGuard } from './services/non-auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AiChatBotComponent } from './ai-chat-bot/ai-chat-bot.component';

export const routes: Routes = [
  // Default route - redirect to sign-in
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  
  // Public routes (only accessible when NOT authenticated)
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [nonAuthGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [nonAuthGuard]
  },
  
  // Protected routes (only accessible when authenticated)
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: 'aichatbot',
        component: AiChatBotComponent,
        canActivate: [authGuard]
      },
      { 
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [authGuard]
      },
      { 
        path: 'user-settings',
        component: UserSettingsComponent,
        canActivate: [authGuard]
      }
    ]
  }
];
