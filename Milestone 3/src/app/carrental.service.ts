import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarrentalService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load carrental data 
    getCarrentals() {
        return this.http.get('http://localhost:8000/carrentals');

    }


    //Uses http.post() to post carrental data 
    addCarrentals(location: string, type: string, pdate: string, ddate: string) {
        this.http.post('http://localhost:8000/carrentals', { location, type, pdate, ddate })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        //location.reload();


    }


    deleteCarrental(carrentalId: string) {
        this.http.delete("http://localhost:8000/carrentals/" + carrentalId)
            .subscribe(() => {
                console.log('Deleted: ' + carrentalId);
            });
        location.reload();
    }


    updateCarrental(carrentalId: string, location: string, type: string, pdate: string, ddate: string) {
        //request path http://localhost:8000/carrentals/5xbd456xx 
        //names and other parameters will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/carrentals/" + carrentalId, {location, type, pdate, ddate })
            .subscribe(() => {
                console.log('Updated: ' + carrentalId);
            });
        //location.reload();
    }

    //This uses http.get() to request data based on carrental entity id 
    getCarrental(carrentalId: string) {
        return this.http.get('http://localhost:8000/carrentals/' + carrentalId);
    }

}
