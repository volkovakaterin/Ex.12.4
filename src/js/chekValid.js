/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */

export default class CheckValid {
  check(value) {
    console.log('chaekValid');
    let numberCheck = 0;
    let booleanEven = false;

    for (let n = value.length - 1; n >= 0; n--) {
      let number = parseInt(value.charAt(n), 10);

      if (booleanEven && (number *= 2) > 9) {
        number -= 9;
      }

      numberCheck += number;
      booleanEven = !booleanEven;
    }
    if (numberCheck % 10 === 0) { return true; }
  }
}
