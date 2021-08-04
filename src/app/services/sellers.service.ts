import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../interfaces/seller';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private http: HttpClient) {}
   
  getSellers() {
    return this.http.get<Seller[]>("https://salvador-client-server.herokuapp.com/sellers");
  }
  addSeller(seller: Seller){
     return this.http.post<Seller>("https://salvador-client-server.herokuapp.com/sellers", seller);
  }
  deleteSeller(id: number){
     return this.http.delete(`https://salvador-client-server.herokuapp.com/sellers/${id}`);
  }
  updateSeller(seller: Seller){
     return this.http.put<Seller>('https://salvador-client-server.herokuapp.com/sellers', seller);
  }
  postFile(uCompany: string, fileToUpload: File): Observable<Seller> {
    const endpoint = 'https://salvador-client-server.herokuapp.com/sellers/upload';
    const formData: FormData = new FormData();
    formData.append('company', uCompany);
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post<Seller>(endpoint, formData);
  }
}
