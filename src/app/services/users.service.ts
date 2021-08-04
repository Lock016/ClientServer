import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    // this.getUsers().subscribe((result: UserResult) => {
    //   console.log(result.data);
    // });
   }
   getUsers() {
    return this.http.get<User[]>("https://salvador-client-server.herokuapp.com/users");
   }
   addUser(user: User){
     return this.http.post<User>("https://salvador-client-server.herokuapp.com/users", user);
   }
   deleteUser(id: number){
     return this.http.delete(`https://salvador-client-server.herokuapp.com/users/${id}`);
   }
   updateUser(user: User){
     return this.http.put<User>('https://salvador-client-server.herokuapp.com/users', user);
   }
   postFile(uName: string, uLastname: string, fileToUpload: File): Observable<User> {
    const endpoint = 'https://salvador-client-server.herokuapp.com/users/upload';
    const formData: FormData = new FormData();
    formData.append('name', uName);
    formData.append('lastname', uLastname);
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post<User>(endpoint, formData);
}
}
