/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

import CheckValid from './chekValid';
import PaymentSystemCheck from './paymentSystemCheck';

export default class Init {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.chekValid = new CheckValid();
    this.paymentSystemCheck = new PaymentSystemCheck(this.parentEl);
    this.check = this.check.bind(this);
  }

  static get markup() {
    return `
        <h1>Check your credit card number</h1>
            <ul class="cards list-unstyled">
            <li><span class="card visa" title="Visa">Visa</span></li>
            <li><span class="card master" title="Mastercard">Mastercard</span></li>
            <li><span class="card amex" title="American Express">American Express</span></li>
            <li><span class="card discover" title="Discover">Discover</span></li>
            <li><span class="card jcb" title="JCB">JCB</span></li>
            <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
            <li><span class="card mir" title="Mir">Mir</span></li>
            </ul>
            <form class="form-inline" novalidate="novalidate">
            <div class="form">
            <input class="form-control" type="text" placeholder="Credit card number" data-original-title="" title="">
            <a id="submitform" class="btn btn-success">Click to Validate</a>
            </div>
            </form>`;
  }

  static get inputSelector() { return '.form-control'; }

  static get submitSelector() { return '.btn-success'; }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.check(evt));
  }

  check(evt) {
    evt.preventDefault();
    this.parentEl.querySelectorAll('.card').forEach((element) => { element.classList.remove('blackout'); });
    if (this.chekValid.check(this.parentEl.querySelector('.form-control').value) === true) {
      this.paymentSystemCheck.check(this.parentEl.querySelector('.form-control').value);
    } else { alert('Некорректно введён номер карты'); }
  }
}
