/* eslint-disable linebreak-style */

import PaymentSystemCheck from '../paymentSystemCheck';

describe('paymentS', () => {
   const cards = document.createElement('div');
  cards.className = 'container';
  const paymentSystem = new PaymentSystemCheck();
  paymentSystem.bindToDOM(cards);
  test('paymentSystem', () => {
    paymentSystem.check('30569309025904');
    console.log(paymentSystem.container);
    console.log(paymentSystem.container.querySelector('diners_club'));
    const checkClass = paymentSystem.container.querySelector('diners_club').classList.contains('blackout');
    expect(checkClass).toBeTruthy();
  });
});
