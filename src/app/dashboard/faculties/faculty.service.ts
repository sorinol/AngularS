import {Injectable} from '@angular/core';
import {CityModel} from "../../models/faculty-model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  faculties: Array<CityModel> = [];
  id: number = 1;

  constructor(private http: HttpClient) {

  }

  public create(data: CityModel) {


    return this.http.post(`${environment.apiUrl}/faculties/addFaculty`, data);
  }

  public update(data: CityModel) {

    console.log("data");
    console.log(data);
    return this.http.put(`${environment.apiUrl}/faculties/editFaculty/${data.id}`, data);
  }

  public delete(facultyId: number) {

    return this.http.delete(`${environment.apiUrl}/faculties/deleteFaculty/${facultyId}`);
  }

  public get() {

    return this.http.get(`${environment.apiUrl}/faculties/getFaculties`);
  }

  public getById(facultyId: number) {


    return this.http.get(`${environment.apiUrl}/faculties/getFacultyById/${facultyId}`);
  }

  public buyFaculty(offerId: number, userId: number) {
    return this.http.post(`${environment.apiUrl}/faculties/buyFaculty`, {facultyId: offerId, userId: userId});
  }

}
