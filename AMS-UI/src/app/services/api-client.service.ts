import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  
  export class ApiClientService {
    host:string = "http://localhost:5000";
    header:any;
    constructor( private http:HttpClient) {}

    throwError(err):string{
      let message:string = err.error.errorMessage;
      throw message || "Please try later";
    }
    /*===============Records================= */

    addRecord(details):Observable<any>{
      return this.http.post<any>(`${this.host}/record/add`, details)
        .pipe( catchError(err => this.throwError(err)) );
    }
    getRecords():Observable<any>{
      return this.http.get<any>(`${this.host}/record/allRecords`)
      .pipe( catchError(err => this.throwError(err)) );
    }
    insertAll(details):Observable<any>{
      return this.http.post<any>(`${this.host}/record/cleanRec`, details)
        .pipe( catchError(err => this.throwError(err)) );
    }
    editRecords(ACNO,details):Observable<any>{
      return this.http.post<any>(`${this.host}/record/edit/${ACNO}`, details)
      .pipe( catchError(err => this.throwError(err)) );
    }
    archiveRecord(ACNO):Observable<any>{
      return this.http.get<any>(`${this.host}/record/archive/${ACNO}`)
      .pipe( catchError(err => this.throwError(err)) );
    }
    
  }