import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }

  saveTodo() {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts', 
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    )
  }

  deleteTodo() {
    return this.http.delete(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
  }

  updateTodo() {
    return this.http.put(
      'https://jsonplaceholder.typicode.com/posts/1', 
      {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    )
  }

  patchTodo() {
    return this.http.patch(
      'https://jsonplaceholder.typicode.com/posts/1', 
      {
        title: 'foo',
      }
    )
  }
}
