import { Injectable } from '@angular/core';
import {UniversityModel} from "../../models/university-model";
import {CityModel} from "../../models/city-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private universities: Array<UniversityModel> = [];

  private cities: Array<CityModel> = [];

  constructor(private http: HttpClient) {


  }

  public create(data: UniversityModel) {

    return this.http.post(`${environment.apiUrl}/university/addUniversity`, data);
  }

  public update(data: UniversityModel) {


    return this.http.put(`${environment.apiUrl}/university/editUniversity/${data.id}`, data);
  }

  public delete(universityId: number) {

    return this.http.delete(`${environment.apiUrl}/university/deleteUniversity/${universityId}`);
  }

  public getByCityId(cityId: number){

    return this.http.get(`${environment.apiUrl}/university/getUniversitiesByCityId/${cityId}`);
  }

  public getById(universityId: number) {



    return this.http.get(`${environment.apiUrl}/university/getUniversityById/${universityId}`);
  }

  public getCities() {

    return this.http.get(`${environment.apiUrl}/city/getCities`);
  }

  public createCity(data: any) {

    return this.http.post(`${environment.apiUrl}/city/addCity`, data);
  }

  public updateCity(data: any) {
    return this.http.put(`${environment.apiUrl}/city/editCity/${data.id}`, data);
  }

  public deleteCity(cityId: number) {
    return this.http.delete(`${environment.apiUrl}/city/deleteCity/${cityId}`);
  }

  public getCityById(cityId: number) {
    return this.http.get(`${environment.apiUrl}/city/getCityById/${cityId}`);
  }
}
