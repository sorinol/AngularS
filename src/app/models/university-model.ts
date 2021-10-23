import {CityModel} from "./city-model";

export interface UniversityModel {
  id: number;
  name: string;
  description: string;
  city?: CityModel;
}
