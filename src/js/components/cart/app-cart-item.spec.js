import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import test from 'tape';

import Catalog from '../catalog/app-catalog';
import CartItem from './app-cart-item';

test('Cart item displayed correctly', (assert) => {
  var callback = sinon.spy();

  const buttonText = 'Testing';

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<CartItem handler={callback} txt={buttonText} />);

  let result = shallowRenderer.getRenderOutput();

  let expected, actual;

  //expected = 'button';
  //actual = result.type;
  //assert.equal(actual, expected, "Cart button is a button");

  shallowRenderer.unmount();

  assert.end();
});
