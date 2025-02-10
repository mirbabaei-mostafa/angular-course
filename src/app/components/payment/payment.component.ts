import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe, TitleCasePipe, DecimalPipe, NgIf } from '@angular/common';
import { ConvertPipe } from '../../convert.pipe';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, TitleCasePipe, ConvertPipe, DecimalPipe, NgIf],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  ReceiverName: string = '';
  PaymentDate: string = '';
  Amount: number = 0;
  Distance: any = 0;

  handleReceiverName(e: any) {
    this.ReceiverName = e.target.value;
  }

  handlePaymentDate(e: any) {
    this.PaymentDate = e.target.value;
  }

  handleAmount(e: any) {
    this.Amount = parseFloat(e.target.value);
  }

  handleDistance(e: any) {
    this.Distance = e.target.value;
  }
}
