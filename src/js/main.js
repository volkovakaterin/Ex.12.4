/* eslint-disable linebreak-style */

import Button from './button';
import Init from './init';

const init = new Init();
const button = new Button();

init.drawPage();
const buttonValid = document.querySelector('.btn');
buttonValid.addEventListener('click', button.buttonValid);
