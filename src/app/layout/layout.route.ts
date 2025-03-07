import { Routes } from "@angular/router";
import { UserSettingsComponent } from "../user-settings/user-settings.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { AiChatBotComponent } from "../ai-chat-bot/ai-chat-bot.component";

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AiChatBotComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'aichatbot', component: AiChatBotComponent },
]
