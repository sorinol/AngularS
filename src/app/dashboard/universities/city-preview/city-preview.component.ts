import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CityModel} from "../../../models/city-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-preview-city',
  templateUrl: './city-preview.component.html',
  styleUrls: ['./city-preview.component.css']
})
export class CityPreviewComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;

  @Input() city: CityModel | undefined;
  cities: Array<CityModel> = [];

  constructor(private router : Router) {
    this.onSelect = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  onSelectCity(id: number) {
    this.onSelect.emit(id);
  }

}
