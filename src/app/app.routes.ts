import { Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

export const routes: Routes = [
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'aboutme',component:AboutmeComponent},
    {path:'experience',component:WorkexperienceComponent},
    {path:'contactme',component:ContactmeComponent}
];
