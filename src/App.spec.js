import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';

import $ from 'jquery';
import { render } from 'react-dom';
import { App } from './App';
 
describe('App', () => {

    beforeEach(function(done) {
       setTimeout(done(), 4000);
    });

  it('should render to the DOM', function() {
    var component = TestUtils.renderIntoDocument(<App/>);


    //  Create the <App /> react component.
    //var component = React.render(<App/>, document.body);

    //  Find the DOM element for the created component.
    var node = ReactDOM.findDOMNode(component);

    expect($(node).find('h1:first').text()).toEqual('Counter (10): 0');
  });

});
