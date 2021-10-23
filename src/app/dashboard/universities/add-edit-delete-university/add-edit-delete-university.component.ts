import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UniversityModel} from "../../../models/university-model";
import {CityModel} from "../../../models/city-model";
import {UniversityService} from "../university.service";

@Component({
  selector: 'app-add-edit-delete-university',
  templateUrl: './add-edit-delete-university.component.html',
  styleUrls: ['./add-edit-delete-university.component.css']
})
export class AddEditDeleteUniversityComponent implements OnInit, OnChanges {

  @Input() university: UniversityModel;
  form: FormGroup;

  selectedCity: CityModel | undefined;
  cities: Array<CityModel> = [];

  constructor(private formBuilder: FormBuilder, private universitiesService: UniversityService) {
    this.form = formBuilder.group({
      id: [null],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      city: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])]
    });
    this.university = {
      id: 0, name: '', description: ''
    }

  }

  ngOnInit(): void {
    this.setupForm();
     this.universitiesService.getCities().subscribe((response:any) => {
      console.log(response);
      this.cities = response;
      },
      (error) => {
      console.log('error');
      console.log(error);
      });
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      city: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.university == null) {
      this.setupForm();
    } else {
      this.form = this.formBuilder.group({
        id: [this.university.id],
        name: [this.university.name, Validators.compose([Validators.required, Validators.minLength(3)])],
        city: [this.university.city, Validators.compose([Validators.required, Validators.minLength(3)])],
        description: [this.university.description, Validators.compose([Validators.required, Validators.minLength(15)])]
      });
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.form.controls['id'].value == null) {
        this.universitiesService.create(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      } else {
        this.universitiesService.update(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      }
    } else {
      alert('The university form is invalid!');
    }
  }

}
