/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
export default class PaymentSystemCheck {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.cards = parentEl.getElementsByTagName('span');
    this.blackout = this.blackout.bind(this);
  }

  check(value) {
    console.log('paymentcheck');
    const number = parseInt(value.charAt(0), 10);
    const numberTwo = parseInt(value.charAt(1), 10);
    if (number === 2) {
      this.blackout('mir');
    } else if (number === 3) {
      if (numberTwo === 0 || numberTwo === 6 || numberTwo === 8) {
        this.blackout('diners_club');
      } if (numberTwo === 4 || numberTwo === 7) {
        this.blackout('amex');
      } if (numberTwo === 1 || numberTwo === 5) {
        this.blackout('jcb');
      }
    } else if (number === 4) { this.blackout('visa'); } else if (number === 5) {
      this.blackout('master');
    } else if (number === 6) {
      this.blackout('discover');
    }
  }

  blackout(clas) {
    for (let i = 0; i < this.cards.length; i++) {
      const element = this.cards[i];
      if (element.classList.contains(clas) === false) { element.classList.add('blackout'); }
    }
  }
}
