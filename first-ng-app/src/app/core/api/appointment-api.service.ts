import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from "../../shared/model/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService {

  constructor(private readonly httpClient: HttpClient) {
  }
  count(): Observable<any> {
    return this.httpClient.get(`/users/appointmentCount`)
  }
  getAllAppointment(): Observable<any> {
    return this.httpClient.get('/user/appointment')
  }

  addAppointment(appointment: Appointment): Observable<null>{
    return this.httpClient.post<null>(`/user/appointment/apply`,appointment);
  }

}
