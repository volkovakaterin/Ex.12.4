/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

export default class Init {
  drawPage() {
    const page = document.createElement('div');
    page.className = 'container';
    page.innerHTML = `
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
    document.body.appendChild(page);
  }
}
