import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';

import $ from 'jquery';
import { render } from 'react-dom';
import { App } from './App';
 
import test from 'tape';

test('Counter has correct values', (assert) => {
  assert.plan(3);

  var shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<App/>);
  var component2 = shallowRenderer.getRenderOutput();

  let expected = 'MyApp';
  let actual = component2.props.className;
  assert.equal(actual, expected,
    `Expected '${expected}' and got '${actual}'`);

  var component = TestUtils.renderIntoDocument(<App/>);

  //  Find the DOM element for the created component.
  var node = ReactDOM.findDOMNode(component);

  expected = 'Counter (10): 0';
  actual = $(node).find('h1:first').text();

  assert.equal(actual, expected,
    `Expected '${expected}' and got '${actual}'`);

  expected = 'Counter (10): 10';
  setTimeout(() => {
    actual = $(node).find('h1:first').text();

    assert.equal(actual, expected,
      `Expected '${expected}' and got '${actual}'`);

    //ReactDOM.unmountComponentAtNode(component);
  }, 1000);
});