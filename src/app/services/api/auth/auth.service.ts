import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginData } from '../../../interfaces/auth/ilogin-data';
import { httpHeaders } from '../../../common/httpCommons';
import { lastValueFrom } from 'rxjs';
import { ILoginResponse } from '../../../interfaces/auth/ilogin-response';
import { environment } from '../../../../environments/environment.development';
import { IRegisterData } from '../../../interfaces/auth/iregister-data';
import { IRegisterResponse } from '../../../interfaces/auth/iregister-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  async login(data: ILoginData): Promise<ILoginResponse> {
    try {
      const result = this.http.post<ILoginResponse>(`${environment.apiUrl}/auth/login`, data, {
        ...httpHeaders,
      });
      const response = await lastValueFrom(result);
      return response;
    } catch (err: any) {
      return { error: err };
    }
  }

  async register(data: IRegisterData): Promise<IRegisterResponse> {
    try {
      const result = this.http.post<IRegisterResponse>(`${environment.apiUrl}/customer/register`, data, {
        ...httpHeaders,
      });
      const response = await lastValueFrom(result);
      return response;
    } catch (err: any) {
      return { error: err };
    }
  }
}
