import { Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

export const routes: Routes = [
    {path:'',redirectTo:'aboutme',pathMatch:'full'},
    {path:'aboutme',component:AboutmeComponent},
    {path:'hobbies',component:HobbiesComponent},
    {path:'contactme',component:ContactmeComponent}
];
