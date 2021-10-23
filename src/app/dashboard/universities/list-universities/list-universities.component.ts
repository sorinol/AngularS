import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UniversityService} from "../university.service";
import {UniversityModel} from "../../../models/university-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-universities',
  templateUrl: './list-universities.component.html',
  styleUrls: ['./list-universities.component.css']
})
export class ListUniversitiesComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  universities: Array<UniversityModel> = [];

  constructor(private universitiesService: UniversityService, private router: Router) {
    this.onSelect = new EventEmitter();
    this.router.navigateByUrl("/university")
  }

  ngOnInit(): void {
    this.universitiesService.get().subscribe((response: any) => {
        console.log(response);
        this.universities = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectUniversity(universityId: number){
    this.onSelect.emit(universityId);
  }


}
