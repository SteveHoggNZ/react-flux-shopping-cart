import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import test from 'tape';

import Catalog from '../catalog/app-catalog';
import CartButton from './app-cart-button';

test('Cart button works', (assert) => {
  var callback = sinon.spy();

  const buttonText = 'Testing';

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<CartButton handler={callback} txt={buttonText} />);

  let result = shallowRenderer.getRenderOutput();

  console.log("here")
  console.log(result.type);

  let expected, actual;

  expected = 'button';
  actual = result.type;
  assert.equal(actual, expected, "Cart button is a button");

  expected = buttonText;
  actual = result.props.children;
  assert.equal(actual, expected, `Cart button text is correctly set to '${buttonText}'`);

  expected = 0;
  actual = callback.callCount;
  assert.equal(actual, expected, 'Cart button not clicked');

  // manually invoke onClick handler via props
  //  Hopefully ReactTestUtils.Simulate.click() etc will support shallow rendering at some stage
  //  https://github.com/facebook/react/issues/1445
  result.props.onClick();

  expected = 1;
  actual = callback.callCount;
  assert.equal(actual, expected, 'Cart button clicked once');

  shallowRenderer.unmount();

  assert.end();
});
