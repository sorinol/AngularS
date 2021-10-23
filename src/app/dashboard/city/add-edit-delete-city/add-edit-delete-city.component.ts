import {Component, Input, OnInit} from '@angular/core';
import {Constants} from "../../../utils/constants";
import {UniversityService} from "../../universities/university.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CityModel} from "../../../models/city-model";
import {AdmittanceModel} from "../../../models/admittance-model";

@Component({
  selector: 'app-add-edit-delete-city',
  templateUrl: './add-edit-delete-city.component.html',
  styleUrls: ['./add-edit-delete-city.component.css']
})
export class AddEditDeleteCityComponent implements OnInit {

  @Input() city: CityModel | undefined;
  admittance: Array<AdmittanceModel>|undefined;
  form: FormGroup;

  constructor(private universityService: UniversityService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      })
  }

  ngOnInit(): void {
    this.admittance = Constants.ADMITTANCE;
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      //TODO: connect with the REST API
    } else {
      //TODO: inform user about errors
    }
  }
}
