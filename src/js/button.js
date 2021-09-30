/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import CheckValid from './chekValid';
import PaymentSystemCheck from './paymentSystemCheck';

export default class Button {
  constructor() {
    this.chekValid = new CheckValid();
    this.paymentSystemCheck = new PaymentSystemCheck();
    this.buttonValid = this.buttonValid.bind(this);
  }

  buttonValid() {
    document.querySelectorAll('.card').forEach((element) => { element.classList.remove('blackout'); });
    if (this.chekValid.check(document.querySelector('.form-control').value) === true) {
      this.paymentSystemCheck.check(document.querySelector('.form-control').value);
    } else { alert('Некорректно введён номер карты'); }
  }
}
