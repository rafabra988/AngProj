import { Injectable } from '@angular/core';
import { Feed, CommentSession } from './feed.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL_API = 'http://localhost:3000';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json;charset=utf-8'})
};    
@Injectable({providedIn: 'root'})
export class FeedService{

    constructor(private http:HttpClient){}

    postsfeed(){
        return this.http.get<Feed[]>(`${URL_API}/publicacoes`, httpOptions);
    }

   /* adcComment(newComment:CommentSession) {
        return this.http.post(`${URL_API}/publicacoes`, newComment, httpOptions);
    }*/
}