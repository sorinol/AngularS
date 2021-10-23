import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {ClientsService} from "../dashboard/clients/clients.service";
import {FacultyService} from "../dashboard/faculties/faculty.service";
import {UniversityService} from "../dashboard/universities/university.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showCityList: boolean= false;
  description: string = '';

  constructor(private clientsService: ClientsService,
              private facultiesService: FacultyService,
              private universitiesService: UniversityService,
              private router: Router
  ) {
    // this.description = environment.homeDescription;
  }

  ngOnInit(): void {
  }

  onShowCityList(){
    this.showCityList=! this.showCityList;
    this.router.navigateByUrl('/city')
  }




}
