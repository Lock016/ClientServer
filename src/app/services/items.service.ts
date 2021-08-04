import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {
  }
  getItems() {
    return this.http.get<Item[]>("https://salvador-client-server.herokuapp.com/items");
  }
  addItem(item: Item){
    return this.http.post<Item>("https://salvador-client-server.herokuapp.com/items", item);
  }
  deleteItem(id: number){
    return this.http.delete(`https://salvador-client-server.herokuapp.com/items/${id}`);
  }
  updateItem(item: Item){
    return this.http.put<Item>('https://salvador-client-server.herokuapp.com/items', item);
  } 
  postFile(uName: string, uDescription: string, uPrice: string, fileToUpload: File): Observable<Item> {
    const endpoint = 'https://salvador-client-server.herokuapp.com/items/upload';
    const formData: FormData = new FormData();
    formData.append('name', uName);
    formData.append('description', uDescription);
    formData.append('price', uPrice);
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post<Item>(endpoint, formData);
  }
}
