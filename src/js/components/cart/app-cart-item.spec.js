import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import test from 'tape';

import Catalog from '../catalog/app-catalog';
import CartItem from './app-cart-item';

test('Cart item displayed correctly', (assert) => {
  var callback = sinon.spy();

  const item = {
    title: 'A test item',
    qty: 3
  };

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<CartItem item={item} />);

  let result = shallowRenderer.getRenderOutput();

  let expected, actual;

  expected = 'tr';
  actual = result.type;
  assert.equal(actual, expected, "Cart item is a table row");
  
  shallowRenderer.unmount();

  assert.end();
});
