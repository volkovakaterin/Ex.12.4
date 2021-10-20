/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
export default class PaymentSystemCheck {
  constructor() {
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
    this.container.innerHTML = `
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
        <div class = "form">
        <input class="form-control" type="text" placeholder="Credit card number" data-original-title="" title="">
        <a id="submitform" class="btn btn-success">Click to Validate</a>
        </div>
        </form>`;
  }

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
//
