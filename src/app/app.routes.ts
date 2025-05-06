import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { ChatComponent } from './features/chat/chat.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { CommunityComponent } from './features/community/community.component';
import { JournalComponent } from './features/journal/journal.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'resources',
    loadComponent: () => import('./features/resources/resources.component').then(m => m.ResourcesComponent)
  },
  {
    path: 'chat',
    loadComponent: () => import('./features/chat/chat.component').then(m => m.ChatComponent)
  },
  {
    path: 'community',
    loadComponent: () => import('./features/community/community.component').then(m => m.CommunityComponent)
  },
  {
    path: 'forum',
    loadComponent: () => import('./features/forum/forum.component').then(m => m.ForumComponent)
  },
  {
    path: 'forum/post/:id',
    loadComponent: () => import('./features/forum/forum.component').then(m => m.ForumComponent)
  },
  {
    path: 'journal',
    loadComponent: () => import('./features/journal/journal.component').then(m => m.JournalComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'therapists',
    loadComponent: () => import('./features/therapists/therapists.component').then(c => c.TherapistsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
