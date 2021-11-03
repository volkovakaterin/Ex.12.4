/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
export default class PaymentSystemCheck {
  check(value) {
    const number = parseInt(value.charAt(0), 10);
    const numberTwo = parseInt(value.charAt(1), 10);
    const cards = document.querySelectorAll('.card');
    function blackout(clas) {
      cards.forEach((element) => { if (element.classList.contains(clas) === false) { element.classList.add('blackout'); } });
    }
    if (number === 2) {
      blackout('mir');
    } else if (number === 3) {
      if (numberTwo === 0 || numberTwo === 6 || numberTwo === 8) {
        blackout('diners_club');
      } if (numberTwo === 4 || numberTwo === 7) {
        blackout('amex');
      } if (numberTwo === 1 || numberTwo === 5) {
        blackout('jcb');
      }
    } else if (number === 4) { blackout('visa'); } else if (number === 5) {
      blackout('master');
    } else if (number === 6) {
      blackout('discover');
    }
  }
}
