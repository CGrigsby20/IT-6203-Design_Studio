
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CapstoneService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data 
    getCapstones() {
        return this.http.get('http://localhost:8000/capstone');
    }

    //Uses http.post() to post data 
    addCapstone(cName: string, cTitle: string, cEmail: string, cPhone: string, oName: string, oWebsite: string, 
        oStreet: string, oZip: string, oCity: string, oState: string, pTitle: string,
        pDescription: string, pSkills: string, pDuties: string, pBenefit: string, pProvide: string) {
        this.http.post('http://localhost:8000/capstone',{ cName, cTitle, cEmail, cPhone, oName, 
        oWebsite, oStreet, oZip, oCity, oState, pTitle, pDescription, pSkills, pDuties, pBenefit, pProvide})
            .subscribe((responseData) => {
                console.log(responseData);
            }); 
    }

    deleteCapstone(capstoneId: string) {
        this.http.delete("http://localhost:8000/capstone/" + capstoneId)
            .subscribe(() => {
                console.log('Deleted: ' + capstoneId);
            });
    }

    updateCapstone(capstoneId: string,cName: string, cTitle: string, cEmail: string, cPhone: string, oName: string, oWebsite: string, 
        oStreet: string, oZip: string, oCity: string, oState: string, pTitle: string,
        pDescription: string, pSkills: string, pDuties: string, pBenefit: string, pProvide: string) {
        //request path http://localhost:8000/capstones/5xbd456xx 
        //send as HTTP body parameters 
        this.http.put("http://localhost:8000/capstone/" + 
        capstoneId,{ cName, cTitle, cEmail, cPhone, oName, oWebsite, oStreet, oZip, oCity,
        oState, pTitle, pDescription, pSkills, pDuties, pBenefit, pProvide })
        .subscribe(() => {
            console.log('Updated: ' + capstoneId);
        });
    }
    //Uses http.get() to request data based on capstone id 
getCapstone(capstoneId: string) {
    return this.http.get('http://localhost:8000/capstone/'+ capstoneId);
}
      
}