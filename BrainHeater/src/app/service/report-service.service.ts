
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  apiURL = "http://localhost:8989/api/v1/";
 

  constructor(private http: HttpClient) { }
  postReport(data: any) {
    return this.http.post(`${this.apiURL}User/createUser`, data)
  }

  getReportcategory() {
    return this.http.get(`${this.apiURL}Category/GetReportCategory`)
  }

}
