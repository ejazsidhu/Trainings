import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchTerm: string = '';
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  getWheatherNow() {
    console.log('search Term', this.searchTerm);
    this.httpService.getWheather(this.searchTerm).subscribe((data: any) => {
      console.log('Weather data: ',data)
    })
  }

}
