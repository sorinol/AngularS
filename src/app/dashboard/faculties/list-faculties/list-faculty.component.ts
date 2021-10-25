import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FacultyService} from "../faculty.service";
import {CityModel} from "../../../models/faculty-model";
import {UniversityModel} from "../../../models/university-model";
import {UniversityService} from "../../universities/university.service";

@Component({
  selector: 'app-list-faculties',
  templateUrl: './list-faculty.component.html',
  styleUrls: ['./list-faculty.component.css']
})
export class ListFacultyComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  faculties: Array<CityModel> = [];
  universities: any;

  constructor(private facultyService: FacultyService) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {

    this.facultyService.getFacultyByUniversityId(1).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.faculties = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectFaculty(id: number) {
    this.onSelect.emit(id);
  }

}
