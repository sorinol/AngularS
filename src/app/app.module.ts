import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import { UserComponent } from './user/user.component';
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFacultyComponent } from './dashboard/faculties/list-faculties/list-faculty.component';
import { PreviewFacultyComponent } from './dashboard/faculties/preview-faculty/preview-faculty.component';
import { AddEditDeleteUniversityComponent } from './dashboard/universities/add-edit-delete-university/add-edit-delete-university.component';
import { AddEditDeleteFacultyComponent } from './dashboard/faculties/add-edit-delete-faculty/add-edit-delete-faculty.component';
import { ListUniversitiesComponent } from './dashboard/universities/list-universities/list-universities.component';
import { PreviewUniversityComponent } from './dashboard/universities/preview-university/preview-university.component';
import { AddEditDeleteClientComponent } from './dashboard/clients/add-edit-delete-client/add-edit-delete-client.component';
import { ListClientsComponent } from './dashboard/clients/list-clients/list-clients.component';
import { PreviewClientComponent } from './dashboard/clients/preview-client/preview-client.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MyAccountComponent } from './my-account/my-account.component';
import { AddEditDeleteCityComponent } from './dashboard/city/add-edit-delete-city/add-edit-delete-city.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { ListCitiesComponent } from './dashboard/city/list-cities/list-cities.component';
import { CityPreviewComponent } from './dashboard/city/city-preview/city-preview.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    ListFacultyComponent,
    PreviewFacultyComponent,
    AddEditDeleteUniversityComponent,
    AddEditDeleteFacultyComponent,
    ListUniversitiesComponent,
    PreviewUniversityComponent,
    AddEditDeleteClientComponent,
    ListClientsComponent,
    PreviewClientComponent,
    MyAccountComponent,
    AddEditDeleteCityComponent,
    ListCitiesComponent,
    CityPreviewComponent,
    HomeComponent,
    NavigationToolbarComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AuthModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule,
        MatToolbarModule,
        MatListModule,
    ],
  entryComponents: [],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
