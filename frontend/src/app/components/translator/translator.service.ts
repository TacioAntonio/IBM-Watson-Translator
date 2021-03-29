import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  private currentUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) { }

  collectLanguages(): Observable<object[]> {
    return this.http.get<object[]>(`${this.currentUrl}/collectLanguages`);
  }

  translate(data: object): Observable<object[]> {
    return this.http.post<object[]>(`${this.currentUrl}/translate`, data);
  }
}
