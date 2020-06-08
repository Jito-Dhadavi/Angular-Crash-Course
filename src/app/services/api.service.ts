import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) {}

  public getData(subUrl): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.baseUrl + subUrl;
      this.http.get(url).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => reject(error)
      );
    });
  }
  public postData(subUrl, data): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.baseUrl + subUrl;
      this.http.post(url, data).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => reject(error)
      );
    });
  }
  public putData(subUrl, data): Promise<any>{
    return new Promise((resolve, reject) => {
      const url = this.baseUrl + subUrl;
      this.http.put(url, data).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => reject(error)
      );
    });
  }
  public deleteData(subUrl): Promise<any>{
    return new Promise((resolve, reject) => {
      const url = this.baseUrl + subUrl;
      this.http.delete(url).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => reject(error)
      );
    });
  }
}
