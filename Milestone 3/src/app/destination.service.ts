import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DestinationService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load destination data 
    getDestinations() {
        return this.http.get('http://localhost:8000/destinations');

    }


    //Uses http.post() to post destination data 
    addDestinations(intdom: string, country: string, dstate: string, dcity: string, tdate: string, rdate: string) {
        this.http.post('http://localhost:8000/destinations', { intdom, country, dstate, dcity, tdate, rdate })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        location.reload();


    }


    deleteDestination(destinationId: string) {
        this.http.delete("http://localhost:8000/destinations/" + destinationId)
            .subscribe(() => {
                console.log('Deleted: ' + destinationId);
            });
        location.reload();
    }


    updateDestination(destinationId: string, intdom: string, country: string, dstate: string, dcity: string, tdate: string, rdate: string) {
        //request path http://localhost:8000/destinations/5xbd456xx 
        //names and other parameters will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/destinations/" + destinationId, {intdom, country, dstate, dcity, tdate, rdate })
            .subscribe(() => {
                console.log('Updated: ' + destinationId);
            });
        location.reload();
    }

    //This uses http.get() to request data based on destination entity id 
    getDestination(destinationId: string) {
        return this.http.get('http://localhost:8000/destinations/' + destinationId);
    }

}
