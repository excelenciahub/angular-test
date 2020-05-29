import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getPosts(): Observable<any> {
        return this.httpClient.get("assets/sample-post-data.json");
    }


}
