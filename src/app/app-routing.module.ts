import {AuthComponent} from './auth/auth.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {HomeComponent} from "./home/home.component";
import {ListCitiesComponent} from "./dashboard/city/list-cities/list-cities.component";
import {ListUniversitiesComponent} from "./dashboard/universities/list-universities/list-universities.component";
import {CityPreviewComponent} from "./dashboard/city/city-preview/city-preview.component";
import {AddEditDeleteUniversityComponent} from "./dashboard/universities/add-edit-delete-university/add-edit-delete-university.component";
import {AddEditDeleteCityComponent} from "./dashboard/city/add-edit-delete-city/add-edit-delete-city.component";
import {PreviewUniversityComponent} from "./dashboard/universities/preview-university/preview-university.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full",},
  {path: "city",component:ListCitiesComponent},
  {path: "city-preview", component:CityPreviewComponent},
  {path: "auth", component: AuthComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "my-account", component: MyAccountComponent},
  {path: "home", component: HomeComponent},
  {path: "Cluj", component: ListUniversitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
