import {AuthComponent} from './auth/auth.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {HomeComponent} from "./home/home.component";
import {ListCitiesComponent} from "./dashboard/universities/list-cities/list-cities.component";
import {ListUniversitiesComponent} from "./dashboard/universities/list-universities/list-universities.component";
import {CityPreviewComponent} from "./dashboard/universities/city-preview/city-preview.component";
import {AddEditDeleteUniversityComponent} from "./dashboard/universities/add-edit-delete-university/add-edit-delete-university.component";
import {AddEditDeleteCityComponent} from "./dashboard/universities/add-edit-delete-university/add-edit-delete-city/add-edit-delete-city.component";
import {PreviewUniversityComponent} from "./dashboard/universities/preview-university/preview-university.component";
import {NavigationToolbarComponent} from "./navigation-toolbar/navigation-toolbar.component";
import {ListFacultyComponent} from "./dashboard/faculties/list-faculties/list-faculty.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full",},
  {path: "nav-toolbar",component:NavigationToolbarComponent},
  {path: "city-preview", component:ListCitiesComponent},
  {path: "auth", component: AuthComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "my-account", component: MyAccountComponent},
  {path: "home", component: HomeComponent},
  {path: "university-preview", component: ListUniversitiesComponent},
  {path: "add-city", component: AddEditDeleteUniversityComponent},
  {path: "faculties-preview", component: ListFacultyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
