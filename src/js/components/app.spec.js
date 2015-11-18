import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import test from 'tape';
//import sinon from 'sinon';

import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CartButton from './cart/app-cart-button';

test('Testing works', (assert) => {
  //var spy = sinon.spy();

  const buttonHandler = () => {
    console.log('Button handler called');
  };

  const buttonText = 'Testing';

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<CartButton handler={buttonHandler} txt={buttonText} />);

  let result = shallowRenderer.getRenderOutput();

  //let node = ReactDOM.findDOMNode(component);

  assert.equal(result.type, 'button', 'Cart button is a button');
  assert.equal(result.props.children, buttonText, `Cart button text is correctly set to '${buttonText}'`);

  // manually invoke onClick handler via props
  //  Hopefully ReactTestUtils.Simulate.click() etc will support shallow rendering at some stage
  //  https://github.com/facebook/react/issues/1445
  result.props.onClick();

  shallowRenderer.unmount();

  assert.end();
});
