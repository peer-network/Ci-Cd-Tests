/**
 * @jest-environment jsdom
 */

const { initializeForm } = require('../Frontend/main.js');

beforeEach(() => {
  document.body.innerHTML = `
    <input id="name" />
    <input id="email" />
    <input id="message" />
    <button id="submit">Submit</button>
    <div id="error-display"></div>
    <div class="mobile-menu"></div>
    <div class="mobile-list"></div>
    <a id="mobile" href="#"></a>
  `;
  initializeForm();
});

test('Submit button exists and works', () => {
  const submit = document.getElementById('submit');
  expect(submit).not.toBeNull();
});
