import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

//http://jservice.io/popular/18418
export class DataService {

  private baseURL:string = "https://cors-anywhere.herokuapp.com/http://jservice.io"
  public dataResult: any;
  public category:any = [];
  public clues:any = [];
  constructor(private http: HttpClient) {
  }

  async getClues(category,value,min_date,max_date){
    var param2 = new HttpParams();
    if(value != null){
      param2 = param2.append('value', value);
    }
    if(min_date != null){
      param2 = param2.append('min_date', min_date);
    }
    
    if(max_date != null){
      param2 = param2.append('max_date', max_date);
    }

    param2 = param2.append('category', category);
    // params = params.append('var2', val2);
    return this.http.get<any>(this.baseURL+"/api/clues",{params:param2});
  }
  async getCategories(){
      let params = new HttpParams();
      params = params.append('count', '100');
      params = params.append('offset', '1');
      return this.http.get<any>(this.baseURL+"/api/categories",{params:params});
  }

}
