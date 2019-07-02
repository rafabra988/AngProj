import { Injectable } from '@angular/core';
import { Feed } from './feed.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json;charset=utf-8'})
};    
@Injectable({providedIn: 'root'})
export class FeedService{

    constructor(private http:HttpClient){}

    postsfeed(){
        return this.http.get<Feed[]>(`http://localhost:3000/publicacoes`, httpOptions);
    }
}