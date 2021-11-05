/* eslint-disable linebreak-style */

import Init from '../init';

describe('PaymentSystemCheck', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const init = new Init(container);
  init.bindToDOM();
  const input = container.querySelector(Init.inputSelector);
  const submit = container.querySelector(Init.submitSelector);
  test('diners_club', () => {
    input.value = '30569309025904';
    submit.click();
    const checkClass = container.querySelector('.diners_club').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
  test('mir', () => {
    input.value = '2200770212727079';
    submit.click();
    const checkClass = container.querySelector('.mir').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
  test('amexr', () => {
    input.value = '371449635398431';
    submit.click();
    const checkClass = container.querySelector('.amex').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
  test('jcb', () => {
    input.value = '3530111333300000';
    submit.click();
    const checkClass = container.querySelector('.jcb').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
  test('visa', () => {
    input.value = '4111111111111111';
    submit.click();
    const checkClass = container.querySelector('.visa').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
  test('master', () => {
    input.value = '5555555555554444';
    submit.click();
    const checkClass = container.querySelector('.master').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
  test('discover', () => {
    input.value = '6011111111111117';
    submit.click();
    const checkClass = container.querySelector('.discover').classList.contains('blackout');
    expect(checkClass).toBe(false);
  });
});
