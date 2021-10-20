/* eslint-disable linebreak-style */
import CheckValid from '../chekValid';

test('CheckValid', () => {
  const checkValid = new CheckValid();
  expect(checkValid.check('30569309025904')).toEqual(true);
});

test('CheckValid2', () => {
  const checkValid = new CheckValid();
  expect(checkValid.check('hbh990988hijkn')).toEqual(undefined);
});
