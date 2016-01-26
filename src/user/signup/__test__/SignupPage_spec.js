import React from 'react';
import {expect} from 'chai';
import SignupPage from './../SignupPage';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
describe('SignupPage', ()=>{
	it('has SignupForm', ()=>{
		const component = renderIntoDocument(
	      <SignupPage />
	    );
	    const SignupForm = scryRenderedDOMComponentsWithClass(component, 'SignupForm');
	    expect(SignupForm.length).to.equal(1);
	})
});