import {Component, Input, OnInit} from '@angular/core';
import {CityModel} from "../../../models/faculty-model";

import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-preview-faculty',
  templateUrl: './preview-faculty.component.html',
  styleUrls: ['./preview-faculty.component.css']
})
export class PreviewFacultyComponent implements OnInit {

  @Input() faculty: CityModel | undefined;
  university: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.faculty);
  }


}
