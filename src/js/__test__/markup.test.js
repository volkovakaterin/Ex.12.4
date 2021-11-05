/* eslint-disable linebreak-style */
import Init from '../init';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new Init(container);
  widget.bindToDOM();
  expect(container.innerHTML).toEqual(Init.markup);
});
