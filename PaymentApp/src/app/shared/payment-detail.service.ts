import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:61236/api/PaymentDetail';
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  // tslint:disable-next-line:typedef
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  // tslint:disable-next-line:typedef
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  // tslint:disable-next-line:typedef
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  // tslint:disable-next-line:typedef
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }


}
