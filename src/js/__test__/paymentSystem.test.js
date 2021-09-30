/* eslint-disable linebreak-style */
import PaymentSystemCheck from '../paymentSystemCheck';

// describe('paymentSystem', () => {
// const button = new Button();
// button.buttonValid();
// });

test('paymentSystem', () => {
  const paymentSystem = new PaymentSystemCheck();
  const cards = document.querySelectorAll('.card');
  const array = [true, true, true, true, true, false, true];
  paymentSystem.check(30569309025904);
  function checkClass() {
    const arrayClass = [];
    cards.forEach((element) => { if (element.classList.contains('blackout')) { checkClass.push(true); } else { checkClass.push(false); } });
    return arrayClass;
  }

  expect(checkClass()).toEqual(array);
});
