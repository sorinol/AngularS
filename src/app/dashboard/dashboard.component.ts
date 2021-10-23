import {Component, OnInit} from '@angular/core';
import {ClientsService} from "./clients/clients.service";
import {FacultyService} from "./faculties/faculty.service";
import {UniversityService} from "./universities/university.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedClient: any = undefined;
  selectedFaculty: any = undefined;
  selectedUniversity: any = undefined;
  selectedCity: any = undefined;

  constructor(private clientsService: ClientsService,
              private facultiesService: FacultyService,
              private universitiesService: UniversityService) {
  }

  ngOnInit(): void {
  }

  onReceiveClient(id: number) {

    this.clientsService.getById(id).subscribe((response: any) => {
        this.selectedClient = {
          id: response.id,
          firstName: response.firstName,
          lastName: response.lastName,
          username: response.username,
          email: response.email,
          retypePassword: '',
          password: ''
        };
      },
      (error) => {
        console.log('error onReceiveClient');
      });
    console.log(this.selectedClient);
  }

  onReceiveFaculty(id: number) {

    this.facultiesService.getById(id).subscribe((response: any) => {
      console.log('response');
      console.log(response);
      this.selectedFaculty = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onReceiveUniversity(id: number) {
    this.universitiesService.getById(id).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.selectedUniversity = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onReceiveCity(id: number) {
    this.universitiesService.getCityById(id).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.selectedCity = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

}
