import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UniversityModel} from "../../../models/university-model";
import {UniversityService} from "../university.service";
import {FacultyService} from "../../faculties/faculty.service";
import {CityPreviewComponent} from "../city-preview/city-preview.component";

@Component({
  selector: 'app-preview-university',
  templateUrl: './preview-university.component.html',
  styleUrls: ['./preview-university.component.css']
})
export class PreviewUniversityComponent implements OnInit {


  @Input() university: UniversityModel | undefined;


  constructor() { }


  ngOnInit(): void {
  }


}
