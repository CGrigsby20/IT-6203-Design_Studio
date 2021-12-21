import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HotelbookingService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load hotelbooking data 
    getHotelbookings() {
        return this.http.get('http://localhost:8000/hotelbookings');

    }


    //Uses http.post() to post hotelbooking data 
    addHotelbookings(name: string, indate: string, outdate: string, rooms: string, street: string, zipcode: string, city: string, state: string) {
        this.http.post('http://localhost:8000/hotelbookings', { name, indate, outdate, rooms, street, zipcode, city, state })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        location.reload();


    }


    deleteHotelbooking(hotelbookingId: string) {
        this.http.delete("http://localhost:8000/hotelbookings/" + hotelbookingId)
            .subscribe(() => {
                console.log('Deleted: ' + hotelbookingId);
            });
        location.reload();
    }


    updateHotelbooking(hotelbookingId: string, name: string, indate: string, outdate: string, rooms: string, street: string, zipcode: string, city: string, state: string) {
        //request path http://localhost:8000/hotelbookings/5xbd456xx 
        //names and other parameters will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/hotelbookings/" + hotelbookingId, {name, indate, outdate, rooms, street, zipcode, city, state })
            .subscribe(() => {
                console.log('Updated: ' + hotelbookingId);
            });
        location.reload();
    }

    //This uses http.get() to request data based on hotelbooking entity id 
    getHotelbooking(hotelbookingId: string) {
        return this.http.get('http://localhost:8000/hotelbookings/' + hotelbookingId);
    }

}
