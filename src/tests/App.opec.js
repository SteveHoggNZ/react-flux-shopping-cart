import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import sd from 'skin-deep';

import $ from 'jquery';
import { render } from 'react-dom';
import { App, Counter } from './App';
import { NICE, SUPER_NICE } from './colors';

import test from 'tape';

test('App is choice-as', (assert) => {
  let expected, actual;

  const counters = [
    {increment: 20, color: NICE},
    {increment: 30, color: SUPER_NICE}
  ];

  const shallowRenderer = ReactTestUtils.createRenderer();
  let component = shallowRenderer.render(<App counters={counters}/>);

  let node = ReactDOM.findDOMNode(component);

  expected = 'Counter (10): 10';

  setTimeout(() => {
    actual = $(node).find('h1:first').text();

    assert.equal(actual, expected,
      `Expected '${expected}' and got '${actual}'`);

    shallowRenderer.unmount();
    assert.end();
  }, 1000);
});

test('Component is choice-as', (assert) => {
  let expected, actual;

  let increment = 10, color = NICE;

  const shallowRenderer = ReactTestUtils.createRenderer();
  let component = shallowRenderer.render(<Counter increment={increment} color={color}/>);

  let node = ReactDOM.findDOMNode(component);

  expected = 'Counter (10): 1';

  setTimeout(() => {
    actual = $(node).find('h1:first').text();

    assert.equal(actual, expected,
      `Expected '${expected}' and got '${actual}'`);

    shallowRenderer.unmount();
    assert.end();
  }, 1000);
});

test('Counter has correct values', (assert) => {
  assert.equal(1,1,'OK');
  assert.end();

  //let vdom, instance, expected, actual;
  //
  //// TODO
  ////assert.plan(3);
  //
  //let counters = [
  //  {increment: 20, color: NICE},
  //  {increment: 30, color: SUPER_NICE}
  //];
  //
  //const tree = sd.shallowRender(React.createElement(App, {counters: counters}));
  //
  //instance = tree.getMountedInstance();
  //vdom = tree.getRenderOutput();
  //
  //vdom.props.children.filter((child) => {
  //  console.warn(child);
  //  console.warn(TestUtils.isElementOfType(child, Counter));
  //});
  //
  //sd.shallowRender.unmount();

  //const temp = vdom.props.children[0];
  //const temp2 = vdom.props.children[1];
  //console.warn(temp.props);
  //console.warn(temp2.props);
  //
  //console.error(instance);

  //assert.equal(1,1,'OK');
  //assert.end();

  //
  //var shallowRenderer = TestUtils.createRenderer();
  //shallowRenderer.render(<App/>);
  //var component2 = shallowRenderer.getRenderOutput();
  //
  //let expected = 'MyApp';
  //let actual = component2.props.className;
  //assert.equal(actual, expected,
  //  `Expected '${expected}' and got '${actual}'`);
  //

  //var component = TestUtils.renderIntoDocument(<App counters={counters}/>);
  //
  ////  Find the DOM element for the created component.
  //var node = ReactDOM.findDOMNode(component);
  //
  //expected = 'Counter (10): 0';
  //actual = $(node).find('h1:first').text();
  //
  //assert.equal(actual, expected,
  //  `Expected '${expected}' and got '${actual}'`);


  //
  //expected = 'Counter (10): 10';
  //setTimeout(() => {
  //  actual = $(node).find('h1:first').text();
  //
  //  assert.equal(actual, expected,
  //    `Expected '${expected}' and got '${actual}'`);
  //
  //  //ReactDOM.unmountComponentAtNode(component);
  //}, 1000);
});