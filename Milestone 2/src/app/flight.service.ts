import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FlightService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load flight data 
    getFlights() {
        return this.http.get('http://localhost:8000/flights');

    }


    //Uses http.post() to post flight data 
    addFlights(aname: string, tnumb: string, tname: string, trip: string, category: string) {
        this.http.post('http://localhost:8000/flights', { aname, tnumb, tname, trip, category })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        location.reload();


    }


    deleteFlight(flightId: string) {
        this.http.delete("http://localhost:8000/flights/" + flightId)
            .subscribe(() => {
                console.log('Deleted: ' + flightId);
            });
        location.reload();
    }


    updateFlight(flightId: string, aname: string, tnumb: string, tname: string, trip: string, category: string) {
        //request path http://localhost:8000/flights/5xbd456xx 
        //names and other parameters will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/flights/" + flightId, {aname, tnumb, tname, trip, category })
            .subscribe(() => {
                console.log('Updated: ' + flightId);
            });
        location.reload();
    }

    //This uses http.get() to request data based on flight entity id 
    getFlight(flightId: string) {
        return this.http.get('http://localhost:8000/flights/' + flightId);
    }

}
