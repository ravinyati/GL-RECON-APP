import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://esypeyq323.execute-api.ca-central-1.amazonaws.com/production/status';
  private baseUrl = 'assets/data';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //   'Access-Control-Allow-Methods': "'GET, POST, PUT, DELETE, OPTIONS'",
    //   'Access-Control-Allow-Origin': '*',
    // });
    return this.http.get(this.apiUrl);
  }
  getFrequencies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getDatabase(): Observable<any> {
    return this.http.get(`${this.baseUrl}/database.json`);
  }
  getTables(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tables.json`);
  }
  getSchemas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/schemas.json`);
  }
  getKeyMeasures(): Observable<any> {
    return this.http.get(`${this.baseUrl}/key-measures.json`);
  }

  getSourceDatabase(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getSourceSchema(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getSourceTable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getTargetDatabase(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getTargetSchema(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getTargetTable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getVarianceDatabase(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getVarianceSchema(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getVarianceTable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }
  getAdjustmentDatabase(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getAdjustmentSchema(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getAdjustmentTable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }
  getTargetFilter(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }

  getSourceFilter(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frequencies.json`);
  }
}
