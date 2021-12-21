import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) { }

    getLocations() {
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=b3e85a57614645dcfdd6c9587c4927d1');

    }

    getLocationbyname(city:string) {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b3e85a57614645dcfdd6c9587c4927d1`);

    }
}


