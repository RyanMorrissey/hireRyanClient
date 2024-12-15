import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FrontEndComponent } from './components/front-end/front-end.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { DogComponent } from './components/dog/dog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'frontend', component: FrontEndComponent},
  {path: 'backend', component: BackEndComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'gimli', component: DogComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  ];
