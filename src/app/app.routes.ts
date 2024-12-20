import { Routes } from '@angular/router';
import { HomeComponent } from '@components/pages/home/home.component';
import { ResumeComponent } from '@components/pages/resume/resume.component';
import { FrontEndComponent } from '@components/pages/front-end/front-end.component';
import { BackEndComponent } from '@components/pages/back-end/back-end.component';
import { HobbiesComponent } from '@components/pages/hobbies/hobbies.component';
import { DogComponent } from '@components/pages/dog/dog.component';
import { DemoComponent } from './components/pages/demo/demo.component';
import { PageNotFoundComponent } from '@components/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'frontend', component: FrontEndComponent},
  {path: 'backend', component: BackEndComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'gimli', component: DogComponent},
  {path: 'demo', component: DemoComponent},
  {path: '',   component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
  ];
