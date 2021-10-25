import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CityModel} from "../../../models/faculty-model";
import {FacultyService} from "../faculty.service";
import {UniversityService} from "../../universities/university.service";
import {UniversityModel} from "../../../models/university-model";
import {DashboardComponent} from "../../dashboard.component";

@Component({
  selector: 'app-add-edit-delete-faculty',
  templateUrl: './add-edit-delete-faculty.component.html',
  styleUrls: ['./add-edit-delete-faculty.component.css']
})
export class AddEditDeleteFacultyComponent implements OnInit, OnChanges {

  @Input() faculty: CityModel | undefined;
  form: FormGroup;
  universities: Array<UniversityModel> = [];

  constructor(private formBuilder: FormBuilder,
              private facultyService: FacultyService,
              private universityService: UniversityService) {


    this.form = formBuilder.group({
      id: [null],
      imageUrl: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      universityId: [null],
    });

  }

  ngOnInit(): void {
    this.setupForm();

    this.universityService.getByCityId(1).subscribe((response: any) => {
        this.universities = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  private setupForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      imageUrl: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      universityId: [null],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.faculty == null) {
      this.setupForm();
    } else {
      this.form = this.formBuilder.group({
        id: [this.faculty.id],
        imageUrl: [this.faculty.imageUrl, Validators.compose([Validators.required, Validators.minLength(1)])],
        name: [this.faculty.name, Validators.compose([Validators.required, Validators.minLength(6)])],
        description: [this.faculty.description, Validators.compose([Validators.required, Validators.minLength(15)])],
        contactNumber: [this.faculty.contactNumber, Validators.compose([Validators.required, Validators.minLength(10)])],
        universityId: [this.faculty.universityId],
      })
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {

      if (this.form.controls['id'].value == null) {
        this.facultyService.create(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      } else {
        this.facultyService.update(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      }

    } else {
      alert('The faculty form is invalid!');
    }
  }

  onDelete(): void {
    this.facultyService.delete(this.form.value.id).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log('error from server');
      console.log(error);
    });
  }

}
