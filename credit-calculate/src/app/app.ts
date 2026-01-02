import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Payment {
  installmentNo: number;
  amount: number;
  remainingAmount?: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  creditAmount: number = 0;
  installmentOptions: number[] = [3, 6, 9, 12, 24, 36];
  selectedInstallmentOption: number = 0;
  paymentPlan: Payment[] = [];

  calculate() {
    if (this.creditAmount > 0 && this.selectedInstallmentOption > 0) {
      const installmentAmount = (this.creditAmount / this.selectedInstallmentOption) * 1.29;
      const newCreditAmount = this.creditAmount * 1.29;
      this.paymentPlan = [];
      for (let i = 1; i <= this.selectedInstallmentOption; i++) {

        this.paymentPlan.push({
          installmentNo: i,
          amount: installmentAmount.toFixed(2) as unknown as number,
          remainingAmount: (newCreditAmount - ( installmentAmount * i)).toFixed(2) as unknown as number
        });
      }
    }
  }
}