import React from 'react';
import {expect} from 'chai';
import SignupForm from './../SignupForm';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
describe('SignupForm', ()=>{
	it('has inputs', ()=>{
		const component = renderIntoDocument(
	      <SignupForm />
	    );
	    const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
	    expect(inputs.length).to.equal(4);
	})
});