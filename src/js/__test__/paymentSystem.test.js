/* eslint-disable linebreak-style */

import PaymentSystemCheck from '../paymentSystemCheck';

test('paymentSystem', () => {
  const paymentSystem = new PaymentSystemCheck();
  paymentSystem.check(30569309025904);
  const checkClass = !document.querySelector('diners_club').classList.contains('blackout');
  expect(checkClass).toBeTruthy();
});


