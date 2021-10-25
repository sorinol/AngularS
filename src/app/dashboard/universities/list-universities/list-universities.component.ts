import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UniversityService} from "../university.service";
import {UniversityModel} from "../../../models/university-model";
import {Router} from "@angular/router";
import {CityModel} from "../../../models/city-model";

@Component({
  selector: 'app-list-universities',
  templateUrl: './list-universities.component.html',
  styleUrls: ['./list-universities.component.css']
})
export class ListUniversitiesComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  universities: Array<UniversityModel> = [];
  selectedUniversity: any;


  constructor(private universitiesService: UniversityService, private router: Router) {
    this.onSelect = new EventEmitter();
    this.router.navigateByUrl("/university")
  }

  ngOnInit(): void {

    this.universitiesService.getByCityId(1).subscribe((response: any) => {
        console.log(response);
        this.universities = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectUniversity(university: UniversityModel){
    this.selectedUniversity=university;
    this.onSelect.emit(university.id);
  }


  getUniversityByCityId(university: UniversityModel) {
    this.selectedUniversity = university;

  }
}
