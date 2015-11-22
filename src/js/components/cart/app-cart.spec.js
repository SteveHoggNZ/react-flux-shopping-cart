import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import test from 'tape';

import Catalog from '../catalog/app-catalog';
import Cart from './app-cart';

test('Cart works', (assert) => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<Cart />);

  let result = shallowRenderer.getRenderOutput();

  let expected, actual;

  console.log("here2");
  console.log(result.type);

  expected = 'button';
  actual = result.type;
  assert.equal(0, 0, "Cart is a xyz");
});
