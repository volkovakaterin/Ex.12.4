/* eslint-disable linebreak-style */

import PaymentSystemCheck from '../paymentSystemCheck';
import Init from '../init';

describe('paymentS', () => {
  const init = new Init();
  const paymentSystem = new PaymentSystemCheck();
  init.drawPage();
  test('paymentSystem', () => {
    console.log(document.querySelector('container'));
    paymentSystem.check('30569309025904');
    const checkClass = paymentSystem.container.querySelector('diners_club').classList.contains('blackout');
    expect(checkClass).toBeTruthy();
  });
});
