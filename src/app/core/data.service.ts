import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

//http://jservice.io/popular/18418
export class DataService {

  private baseURL:string = "https://cors-anywhere.herokuapp.com/http://www.jservice.io"
  public dataResult: any;
  public currentIndex: string;
  public category:any = [];
  constructor(private http: HttpClient) {
  }

  async getCategories(categoryKeyWord){
    // params = params.append('var2', val2);
      let params = new HttpParams();
      params = params.append('count', '100');
      params = params.append('offset', this.currentIndex);
      let dataGet = await this.http.get<any>(this.baseURL+"/api/categories",{params:params})
      await dataGet.subscribe(
        (data) => {
          for(var i=0;i<data.length;i++){
            try{
              if(data[i].title.includes(categoryKeyWord) && this.category.length<101){
                this.category.push(data[i])
              }
            }
            catch(e){

            }
          }
          console.log(this.currentIndex);
          let newIndex = parseInt(this.currentIndex)+99;
          this.currentIndex = newIndex.toString();
          if(this.category.length<25){
            this.getCategories(categoryKeyWord)
          }
          // console.log(this.category)
        }  
      );
  }

  async getClues(value,category,min_date,max_date,offset){
    // params = params.append('var2', val2);
    
  }
}
