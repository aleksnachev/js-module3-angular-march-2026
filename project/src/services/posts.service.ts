import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface.js';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient){}

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.apiUrl}`)
  }

  deletePost(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
